var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validationRules = {

  user: {
    type: Schema.Types.ObjectId,
    ref: 'Book'
  },
  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  }

};
var UserSchema = new Schema(validationRules);

var Book = mongoose.model('Book', validationRules);

module.exports = Book;
