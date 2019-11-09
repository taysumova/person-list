const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: 'No title'
  },
  author:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('List', ListSchema, 'lists');
