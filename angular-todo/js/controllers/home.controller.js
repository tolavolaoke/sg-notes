function HomeController() {
  var controller = this;

  controller.title = 'Show current TODOS';

  controller.addTitle = 'Add new TODOS';
  controller.addNewTodos = function() {
    controller.todos.push(controller.newTodos);
    controller.newTodos = '';
  };

  controller.updateTodos = function(index) {
    if(controller.updatedTodosField[index]) {
      controller.todos[index] = controller.updatedTodosField[index];
    }
  };

  controller.deleteTodos = function($index) {
    controller.todos.splice($index, 1);
  };



  function init() {
    controller.todos = ['dust surfaces', 'tidy room', 'hover floor','water plants'];
  }
  init();
}

angular
  .module('angulartodo')
  .controller('HomeController', HomeController);
