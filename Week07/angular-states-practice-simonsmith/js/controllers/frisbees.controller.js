function FrisbeesController() {
  var controller = this;

  function init() {
    controller.title = 'Frisbees';
  }

  init();
}


angular
  .module('angularstatespractice')
  .controller('FrisbeesController', FrisbeesController);
