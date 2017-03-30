// I added this whole page
var Book = require('../models/book-model');

// Order of Actions is significant

// Action: create - to create a book
// Action: edit - to edit a book ----------------------------
function editBook(req, res) {
  var bookId = req.params.id;

  Book.findOne({ _id: bookId }, function (err, book) {
    if (err) {
      console.log('Could not get book:', err);
      res.status(404).send('Could not get book');
      return;
    }
    res.render('books/edit', {
      title: 'Edit book',
      book: book
    });
  });
}

// Action: update - to update a book -----------------------
function updateBook(req, res) {
  var bookId = req.params.id;
  var userId = req.body.userId;
  var updatedBook = {
    title: req.body.title,
    author: req.body.author
  };

  Book.findOneAndUpdate({ _id: bookId }, updatedBook, function (err) {
    if (err) {
      console.log('Could not get existing book to update:', err.message);
      res.status(404).send('Could not get existing book to update');
      return;
    }
    res.redirect('/users/'+ userId);
  });
}

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
  edit: editBook,
  update: updateBook,
  destroy: destroyBook
  // create: createBook
};
