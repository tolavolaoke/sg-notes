var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controller');
// I added this line 5
var booksController = require('../controllers/books-controller');

//everytime we put res.render it wll automatically look in the folder 'views'
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Home'
  });
});

//Users
router.route('/users')
  .get(usersController.index)
  .post(usersController.create);

router.get('/users/new', usersController.new);
router.get('/users/:id/edit', usersController.edit);


router.route('/users/:id')
  .put(usersController.update)
  .get(usersController.show)
  .delete(usersController.destroy);


// Books
  // I added line 31 and 32
router.route('/books/:id')
  .delete(booksController.destroy);




module.exports = router;
