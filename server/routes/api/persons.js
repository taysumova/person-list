const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Persons
router.get('/', async (req, res) => {
  const persons = await loadPersons();
  res.send(await persons.find({}).toArray());
});

// Add Person
router.post('/', async (req, res) => {
  const persons = await loadPersons();
  await persons.insertOne({
    name: req.body.name,
    createdAt: new Date()
  });
  res.status(201).send();
});

//Delete Person
router.delete('/:id', async (req, res) => {
  const persons = await loadPersons();
  await persons.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(200).send();
});

async function loadPersons() {
  const client = await mongodb.MongoClient.connect('mongodb+srv://admin:admin2019@cluster0-4ykz4.mongodb.net', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return client.db('person-list').collection('persons');
}

module.exports = router;
