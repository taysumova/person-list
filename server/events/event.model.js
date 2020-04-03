const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  campaignId: {
    type: String,
    unique: true,
    required: true,
  },
  customId: {
    type: String,
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
