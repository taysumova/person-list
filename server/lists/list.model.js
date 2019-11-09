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
    // required: true,
    ref: 'User'
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

// schema.set('toJSON', { virtuals: true });
ListSchema.virtual('persons', {
  ref: 'Person',
  localField: '_id',
  foreignField: 'listId'
});

module.exports = mongoose.model('List', ListSchema, 'lists');
