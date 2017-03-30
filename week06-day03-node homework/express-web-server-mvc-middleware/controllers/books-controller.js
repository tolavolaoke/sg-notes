var Book = require('../models/book-model');


// Action: new
function newBook(req, res) {
  res.render('books/new', {
    title: 'New Book'
  });
}

// Action: create
function createBook(req, res) {
  var userId = req.body.userId;
  var newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;

  newBook.save(function (err, savedBook) {
    var errorJson = [];

    if (err) {
      for (var path in err.errors) {
        errorJson.push({
          path: path,
          message: err.errors[path].message
        });
        console.log('Could not create new book: error:', err.errors[path].message);
      }
      res.status(400).json(errorJson);
      return;
    }
    // the new book has been created and saved to db
    // now we need to add the id of the books array
    // of the user whose useId we have been passed for
   User.find({_id: user,Id}, function (err, user){

    res.redirect('/users' + userId);
  });
});



// Action: edit
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

// Action: update
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
    res.redirect('/users/' + userId);
  });
}

// Action: destroy
function destroyBook(req, res) {
  var bookId = req.params.id;
  var userId = req.body.userId;

  Book.deleteOne({ _id: bookId }, function (err) {
    if (err) {
      console.log('Could not get book to delete:', err.message);
      res.status(404).send('Could not get book to delete');
      return;
    }
    res.redirect('/users/' + userId);
  });
}

module.exports = {
  edit: editBook,
  new: newBook,
  create: createBook,
  update: updateBook,
  destroy: destroyBook
};
