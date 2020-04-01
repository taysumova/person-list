const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  customId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Event', EventSchema, 'events');
