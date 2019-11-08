const express = require('express');
const router =  new express.Router();
const List = require('../models/list.model');
const Person = require('../models/person.model');
const { ObjectID } = require('mongodb');

const authenticate  = require('../middleware/auth');

router.post('/', authenticate, async (req, res) => {
  const list = new List({
    ...req.body,
    author: req.user._id
  });
  try {
    await list.save();
    res.status(201).send(list);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get all lists from other user too - delete later
router.get('/',async (req,res) => {
  try {
    const posts = await List.find({});
    res.send(posts);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/:id', authenticate, async (req, res) => {
  const _id =  req.params.id;
  if (!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }
  try {
    const post = await List.findOne({ _id, author: req.user._id });
    if(!post){
      return res.status(404).send();
    }
    res.send(post);
  } catch (error) {
    res.status(500).send();
  }
});

router.patch('/:id', authenticate, async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "title"];
  const isValidOperation  = updates.every((update) => allowedUpdates.includes(update));
  if(!isValidOperation){
    res.status(400).send({ error:'Invalid updates' });
  }
  if (!ObjectID.isValid(_id)) {
    res.status(404).send();
  }
  try {
    const post = await List.findOne({ _id: req.params.id, author:req.user._id });

    if(!post){
      res.status(404).send();
    }

    updates.forEach((update) => post[update] = req.body[update]);
    await post.save();

    res.send(post);
  } catch (error) {
    res.status(400).send();
  }
});

router.delete('/:id', authenticate, async (req,res) => {
  const _id = req.params.id;
  if (!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }
  try {
    const deleteList = await List.findOneAndDelete({ _id:_id, author: req.user._id });
    if (!deleteList) {
      return res.status(404).send();
    }
    res.send(deleteList);
  } catch (error) {
    res.status(500).send();
  }
});

// TO DO - later refactor assign person to list
router.post('/:id/person', authenticate, async (req,res) => {
  const _id = req.params.id;
  const userId = req.user._id;

  if (!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }

  if (!ObjectID.isValid(userId)) {
    return res.status(404).send();
  }

  const person = new Person({
    ...req.body,
    author: userId,
    listId: _id
  });

  try {
    await person.save();
    res.status(201).send(person);
  } catch (error) {
    res.status(400).send(error);
  }

});

//get all persons for a list
router.get('/:id/person', async (req, res) => {
  try {
    const list = await List.findOne({ _id: req.params.id });
    await list.populate('persons').execPopulate();
    res.send(list.persons);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
