const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'No name'
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
});

module.exports = mongoose.model('Person', personSchema, 'persons');
