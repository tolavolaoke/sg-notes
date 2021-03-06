//Utilities used by test specifications
//Singleton (so init-cap the init-cap the object name).
var TestUtils = {

  // We are looking for HTML that looks like this:
  // <a href="/books/58cbb8e616f8b0228f71b315">
  // We can the extract the user ID from the `href` attribute using a regex.
  getFirstBookIdFromUserPageHTML: function (html) {
    var regEx = /\/books\/[0-9a-f]+/;
    var result = regEx.exec(html)[0];
    var pathElements = result.split('/');

    return pathElements[2];
  },
  // We are looking for HTML that looks like this:
  // <a href="/users/58cbb8e616f8b0228f71b315">
  // We can the extract the user ID from the `href` attribute using a regex.
  getFirstUserIdFromUserListHTML: function(html) {
    var regEx = /\/users\/[0-9a-f]+/;
    var result = regEx.exec(html)[0];
    var pathElements = result.split('/');

    return pathElements[2];
  },
  generateUniqueFirstName: function() {
    return 'firstName' + Math.random();
  }
};

module.exports = TestUtils;
