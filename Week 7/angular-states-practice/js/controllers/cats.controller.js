function CatsController() {
  var controller = this;

  // this is an initialsation function
  function init() {
    controller.title = 'Cats';
  }

  init();
}

angular
.module('angularstatespractice')
.controller('CatsController', CatsController);
