const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'No name'
  },
  description:{
    type: String,
    required:true,
    trim: true
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  listId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List'
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
});

const Person = mongoose.model('Person', PersonSchema, 'persons');

module.exports = Person;
