const express = require('express');
const router =  new express.Router();
const User = require('../models/userModel');
const { ObjectID } = require('mongodb');

const authenticate  = require('../controllers/userController');


// remove to file auth
router.post('/register', async (req,res) => {
  const user = new User(req.body);
  try{
    const token = await user.newAuthToken();
    res.status(201).send({user, token})
  }catch(e){
    res.status(400).send(e);
  }
});

// remove to file auth
router.post('/login', async (req, res) => {
  try {
    const user  = await User.checkValidCredentials(req.body.email, req.body.password);
    const token = await user.newAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// remove to file auth
router.post('/logout', authenticate, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) =>{
      return token.token !== req.token
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get('/profile', authenticate, async (req, res)=> {
  res.send(req.user);
});


router.patch('/profile', authenticate, async (req, res) => {
  const updates  = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  const _id =  req.user._id;

  if(!isValidOperation){
    res.status(400).send({ error: 'Invalid request' });
  }

  if (!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }

  try {
    updates.forEach((update) => req.user[update] = req.body[update]);
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(400).send();
  }

});

// to do - make secure this method - do not let easily delete
router.delete('/profile', authenticate, async (req,res) => {
  if (!ObjectID.isValid(req.user._id)) {
    return res.status(404).send();
  }

  try {
    await req.user.remove();
    res.send(req.user);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
