function ContactController() {
  var controller = this;

  function init() {
    controller.title = 'Contact Us';
  }

  init();
}


angular
  .module('angularstates')
  .controller('ContactController', ContactController);
