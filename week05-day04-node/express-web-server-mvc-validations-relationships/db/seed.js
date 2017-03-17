// will only run when we choose to run it.
// this folder is designed to be run stand alone

// this seed programme needs to put things in the database and will need the following to do so.
var User = require('../models/user-model');
var User = require('../models/user-model');
var mongoose = require('mongoose');
var book1 = new Book();
var book2 = new Book();
var user = new User();


book1.title = 'Great Expectations';
booK1.author = 'Chucky D';
book2.title = '1984';
booK2.author = 'George Orwell';

mongoose.connect('mongodb://localhost/sg-mvc');

mongoose.connection.db.dropCollection('User', function (err){
  console.log('could not dro user collection:err', err);
  process.exit(1);
}

book1.save(function (err)) {

});
