/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var expect = chai.expect;
var request;

chai.should();
chai.use(chaiHttp);

// We are looking for HTML that looks like this:
// <a href="/users/58cbb8e616f8b0228f71b315">
// We can the extract the user ID from the `href` attribute using a regex.
function getFirstUserIdFromUserListHTML(html) {
  var regEx = /\/users\/[0-9a-f]+/;
  var result = regEx.exec(html)[0];
  var pathElements = result.split('/');

  return pathElements[2];
}

  // before running any tests ... before we run any of these 'it' functions we are going to run these anonymous functions
describe('Users', function () {
  beforeEach(function () {
    request = chai.request(app);
  });


// TEST FOR NEW---------------------------------------------------------------
  describe('GET', function () {
    it('should return error for invalid URL GET', function (done) {
      request
        .get('/invalid_url')
        .end(function (err) {
          expect(err).not.to.be.null;
          done();
        });
    });
    it('should list all users for GET /users', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          expect(err).to.be.null;
          res.should.have.status(200);
          res.should.be.html;
          res.text.should.match(/User list/);
          done();
        });
    });
  });


// TEST FOR UPDATE -------------------------------------------------------------
  console.log('Update Testing');

  describe('PUT', function () {
    it('should return error for non-existent user id', function (done) {
      request
      .put('/users/non-existent-user-id')
      .end(function (err, res) {
        res.should.have.status(404);
        done();
      });
    });
    it('should return correct result for existing user', function (done) {
      request
      .get('/users/')
      .end(function (err, res) {
        var userId = getFirstUserIdFromUserListHTML(res.text);

        request
          .put('/users/' + userId)
              // setting a header
          .set('content-type', 'application/x-www-form-urlencoded')
            // sending a package data with this 'put' request
          .send({'firstName': 'testFirstName', 'lastName': 'testLastName', 'email': 'testEmail'})
          .end(function (err, res) {
            res.should.have.status(200);
            res.text.should.match(/testFirstName/);
            res.text.should.match(/testLastName/);
            done();
          });
      });
    });
  });


 // TEST FOR CREATE USER--------------------------------------------------------
  console.log('Create Testing');
  describe('POST', function () {
    it('should return error when firstName is blank', function (done) {
      request
     .post('/users')
     .set('Content-Type', 'application/x-www-form-urlencoded')
     .send({ firstName: '', email: 'testpostlastname@example.com' })
     .end(function (err, res) {
       var jsonResponse = JSON.parse(res.text);

       res.should.have.status(400);
       expect(jsonResponse).to.be.an('array');
       expect(jsonResponse.length).to.equal(1);
       expect(jsonResponse[0].path).to.equal('firstName');
       done();
     });
    });
    it('should return error email is blank', function (done) {
      request
     .post('/users')
     .set('Content-Type', 'application/x-www-form-urlencoded')
     .send({ firstName: 'testPostFirstName', email: '' })
     .end(function (err, res) {
       var jsonResponse = JSON.parse(res.text);

       res.should.have.status(400);
       expect(jsonResponse).to.be.an('array');
       expect(jsonResponse.length).to.equal(1);
       expect(jsonResponse[0].path).to.equal('email');
       done();
     });
    });
    it('should create new user when data is valid', function (done){
      request
      .post('/users')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ firstName: 'testFirstName', email: 'testpost@example.com' })
       .end(function (err, res) {
         var firstNameRegExp = new RegExp(testFirstName);

         res.should.have.status(200);
         console.log('res.text', res.text);
         res.text.should.match(firstNameRegExp);
         done();
       });
    });
  });



//  TEST FOR DELETE USER ------------------------------------------------------
  describe('DELETE', function () {
    it('should return error for non-existent user id', function (done) {
      request
        .delete('/users/non-existent-user-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing user', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = getFirstUserIdFromUserListHTML(res.text);

          request
            .delete('/users/' + userId)
            .end(function (err, res) {
              res.should.have.status(200);
              done();
            });
        });
    });
  });
});



// HOMEWORK---------------------------------------------------------
// - write 2 tests for the `UPDATE` HTTP method for *Users*
  // - for a non-existent user
  // - for an existing user
// - you’ll have to set the HTML header
// - and send the required form data
// - like this:
// ```.set('content-type', 'application/x-www-form-urlencoded') // set the form encoding type
// .send({'title': 'Test Post', 'body': 'Body Text'})```
