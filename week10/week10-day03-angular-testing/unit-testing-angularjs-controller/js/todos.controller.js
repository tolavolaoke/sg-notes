function TodosController(TodosFactory) {
  const controller = this;

  function init() {
    controller.list = TodosFactory.list;
    controller.inputText = '';
  }

  controller.isSubmitButtonDisabled = () => {
    return !controller.inputText;
  };

  controller.isClearButtonDisabled = () => {
    return controller.list.length < 1;
  };

  controller.add = () => {
    TodosFactory.add(controller.inputText); //not testing the factory just checking if the method 'add' has been tested ... with the paremeters in the brackets.
    controller.inputText = '';
  };

  controller.clear = () => {
    TodosFactory.clear();
  };

  init();
}
TodosController.$inject = ['TodosFactory'];

angular
  .module('TodosApp')
  .controller('TodosController', TodosController);
