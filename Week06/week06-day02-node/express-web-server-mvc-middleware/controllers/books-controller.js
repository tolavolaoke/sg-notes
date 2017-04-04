
var User = require('../models/user-model');
var Book = require('../models/books-model');





// Action: destroy
function destroyBooks(req, res) {
  var userId = req.params.id;

  Book.deleteOne({ _id: userId }, function (err) {
    if (err) {
      console.log('Could not delete book:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not delete book ');
      return;
    }
    res.redirect('/users');
  });
}








module.exports = {
  index: indexUsers,
  new: newUser,
  create: createUser,
  edit: editUser,
  update: updateUser,
  show: showUser,
  destroy: destroyUser
};
