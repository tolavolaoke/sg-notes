// ths maps the route or path to the HTTP

var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controller');

router.get('/', function(req, res){
  res.render('index');
});

router.route('/users')
  .get(usersController.index)
  .post(usersController.create);

router.get('/users/new', usersController.new);
router.get('/users/:id/edit', usersController.edit);

router.route('/users/:id')
  .put(usersController.update)
  .get(usersController.show)
  .delete(usersController.destroy);

module.exports = router;
