const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TriggerSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    required: true
  },
  visitor: {
    type: Schema.Types.String,
    unique: true
  },
  visitorInfo: {
    email: {
      type: Schema.Types.String
    },
    phone: {
      type: Schema.Types.String
    }
  },
  count: {
    type: Schema.Types.Number,
    default: 1
  },
  // watch at updateAt when it will be added
  //to stop trigger for some time or use only for unique user
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
