const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rules = require('../helpers/rules');

const PersonSchema = new Schema({
  surname: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    default: 'No name'
  },
  middleName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    validate: {
      validator: function(v) {
        return rules.emailRules.test(v);
      },
      message: props => `${props.value} is not a valid email.`
    },
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  comments:{
    type: String,
    trim: true
  },
  status: {
    // TO DO ADD ARRAY OF VALID VALUES - NEW, IN WORK, CANCELED, ARCHIVED
    type: String
  },
  author:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Person', PersonSchema, 'persons');
