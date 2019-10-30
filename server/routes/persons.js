const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.get('/', async (req, res) => {
  try {
    const persons = await Person.find();
    await res.status(200).json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getPerson, (req, res) => {
  res.json(res.person);
});

router.post('/', async (req, res) => {
  const person = new Person({
    name: req.body.name,
  });
  try {
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:id', getPerson, async (req, res) => {
  if (req.body.name) {
    res.person.name = req.body.name
  }

  try {
    const updatedPerson = await res.person.save();
    res.json(updatedPerson);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', getPerson, async (req, res) => {
  try {
    await res.person.remove();
    await res.json({ message: 'Deleted this person' });
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
});


// Middleware
async function getPerson(req, res, next) {
  let person;
  try {
    person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({
        message: 'Can\'t find the subscriber'
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }

  res.person = person;
  next();
}

module.exports = router;
