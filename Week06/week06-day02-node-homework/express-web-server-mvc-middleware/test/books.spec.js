// test specification for Books
/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var TestUtils = require('./test-utils');
// var expect = chai.expect;
var request;

chai.should();
chai.use(chaiHttp);


describe('Books', function () {
  beforeEach(function () {
    request = chai.request(app);
  });

  describe.only('DELETE', function () {
    it('should return error for non-existent book id', function (done) {
      request
        .delete('/books/non-existent-book-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing book', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = TestUtils.getFirstUserIdFromUserListHTML(res.text);

          request
            .get('/users/' + userId)
            .end(function (err, res) {
              var bookId = TestUtils.getFirstBookIdFromUserPageHTML(res.text);

              res.should.have.status(200);
              request
                .delete('/books/' + bookId)
                .send({ userId: userId})
                .end(function (err, res) {
                  var bookIdRegExp = new RegExp('bookId'); //want to make sure that the book id dosent show.
                  res.should.have.status(200);
                  res.text.should.not.match(bookIdRegExp);
                  done();
                });
            });
        });
    });
  });
});
