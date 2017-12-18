'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:{
    type: String,
    required: 'Enter name'
  },
  username:{
    type: String,
    required: 'Choose a username'
  },
  createdDate:{
    type: Date,
    default: Date.now
  },
  email:{
    type: String,
    required: 'Enter email'
  }
});

module.exports = mongoose.model('Users',UserSchema)
