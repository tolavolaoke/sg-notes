// I added this whole page
var Book = require('../models/book-model');

// Order of Actions is significant

// Action: create - to create a book
// Action: edit - to edit a book
// Action: update - to update a book

// Action: destroy - to delete a book
function destroyBook(req, res) {
  var bookId = req.params.id; //defining the variable for bookId so we can use it
  var userId = req.body.userId; //defining the variable for userId so we can use it

  Book.deleteOne({ _id: bookId }, function (err) {
    if (err) {
      console.log('Could not get book to delete:', err.message);
      res.status(404).send('Could not get book to delete');
      return;
    }
    res.redirect('/users/' + userId); //with '+ userId' it will redirect to the user page.
  });
}

module.exports = {
  destroy: destroyBook
  // edit: editBook,
  // update: updateBook,
  // create: createBook
};
