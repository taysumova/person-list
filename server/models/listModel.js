const mongoose = require('mongoose');

const ListSchema  = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'No title'
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

const List = mongoose.model('List', ListSchema, 'lists');

module.exports = List;
