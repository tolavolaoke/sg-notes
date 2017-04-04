console.log('home.controller.js');

function HomeController() {
  var controller = this;
  var canShowGonzo = false;

  // Shows example of sending the click event to this handler –
  // see the markup, where the variable `$event` is passed to this method.
  controller.showGonzo = function(event) {
    console.log('showGonzo: event:', event);
    canShowGonzo = true;
  };

  controller.hideGonzo = function() {
    canShowGonzo = false;
  };

  controller.toggleGonzo = function () {
    canShowGonzo = !canShowGonzo;
  };

  controller.isGonzoVisible = function () {
    return canShowGonzo;
  };

  controller.getGonzoVisibilityClass = function () {
    var className = 'isVisible';

    if (!canShowGonzo) {
      className = 'isNotVisible';
    }

    return className;
  };

// To add a trainer to the list
  controller.addTrainer = function () {
    console.log('addTrainer: controller.newTrainerName:', controller.newTrainerName);
    controller.trainers.push(controller.newTrainerName);
    controller.newTrainerName = '';
  };

  // To update an individual trainer
  controller.updateTrainer = function (index) {
    if(controller.updatedTrainerNames[index]) {
      controller.trainers.splice(index, 1, controller.updatedTrainerNames[index]);
      controller.newTrainerNames = [];
    }
  };
// To delete an individual trainer
  controller.deleteTrainer = function (index) {
    controller.trainers.splice(index, 1);
  };

// To clear the trainers list
  controller.clearTrainerList = function () {
    controller.trainers = [];
  };
  // To clear the trainer list button when clicked along with the trainers list
  controller.canDisplayClearTrainerListButton = function() {
    return controller.trainers.length > 0;
  };

// To disable the add button when the inut box is empty
  controller.isAddButtonDisabled = function() {
    return !controller.newTrainerName;
  };

  function init() {
    console.log('inside HomeController');
    controller.newTrainerName = '';
    controller.updatedTrainerNames = [];
    controller.title = 'Home page';
    controller.trainers = ['Steve', 'Matt', 'Ollie', 'Niall'];
    controller.hideGonzo();
  }

  init();
}

angular
  .module('myFirstApp', [])
  .controller('HomeController', HomeController);
