// ths maps the route or path to the HTTP
var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controller');

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Home'
  });
});
// Action: index
router.route('/users/')
  .get(usersController.index)
// Action: create
  .post(usersController.create);

// Action: new
router.get('/users/new', usersController.new);
// Action: edit
router.get('/users/:id/edit', usersController.edit);
// Action: update

router.route('/users/:id')
  .put(usersController.update)
// Action: show
  .get(usersController.show)
// Action: destroy
  .delete(usersController.destroy);

module.exports = router;
