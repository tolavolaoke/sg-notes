function NewController() {
  var controller = this;

  // this is an initialsation function
  function init() {
    controller.title = 'Add New To Do';
  }

  init();
}

angular
.module('angulartodo')
.controller('NewController', NewController);
