var mongoose = require('mongoose');

// Defining the database Schema

var User = mongoose.model('User', {
  firstName: String,
  lastName: String,
  email: String

});

module.exports = User;
