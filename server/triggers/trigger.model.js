const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TriggerSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Event'
  },
  userId: {
    type: String,
    required: true,
  },
  userInfo: {
    type: Object,
  },
  count: {
    type: Schema.Types.Number,
  },
  updatedAt:{
    type: Date,
    default: Date.now
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Trigger', TriggerSchema, 'triggers');
