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

ListSchema.virtual('persons', {
  ref: 'Person',
  localField: '_id',
  foreignField: 'listId'
});

const List = mongoose.model('List', ListSchema, 'lists');

module.exports = List;
