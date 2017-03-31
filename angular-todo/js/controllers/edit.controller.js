function EditController() {
  var controller = this;

  controller.title = 'Edit user';

  function init() {

  }
  init();
}

angular
  .module('angulartodo')
  .controller('EditController', EditController);
