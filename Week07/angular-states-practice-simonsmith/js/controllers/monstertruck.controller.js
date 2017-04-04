function MonstertruckController() {
  var controller = this;

  function init() {
    controller.title = 'Monstertruck';
  }

  init();
}


angular
  .module('angularstatespractice')
  .controller('MonstertruckController', MonstertruckController);
