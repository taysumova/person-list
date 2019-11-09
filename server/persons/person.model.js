const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: 'No name'
  },
  description:{
    type: String,
    trim: true
  },
  author:{
    type: Schema.Types.ObjectId,
    // required: true,
    ref: 'User'
  },
  listId:{
    type: Schema.Types.ObjectId,
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
