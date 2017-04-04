function HomeController() {
  var controller = this;

  function init() {
    controller.title = 'Simon Smith';
    
  }
  init();
}


angular
  .module('angularstatespractice')
  .controller('HomeController', HomeController);
