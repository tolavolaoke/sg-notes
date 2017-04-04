// we are passing a parameter called duckfactory to the duckcontroller
// put in the 'function duckcontroller ()' whatever needs to be defined
function DuckController($stateParams, DuckFactory, $state) {
  var controller = this;

  controller.getDuck = function () {
    var duckId = $stateParams.duckId;

    DuckFactory.getOne(duckId).then(
      function success(response) {
        console.log('Duck:', response);
        controller.selectedDuck = response.data;
      },
      function error(error) {
        console.log('Error getting duck:',error);
      }
    );
  };

// Add Duck =================================================

  controller.addDuck = function () {
    console.log('addDuck()');
    DuckFactory.createOne(controller.newDuck).then(
      function success(response) {
        console.log('Created new duck:', response);
        $state.go('home');
      },
      function error(error) {
        console.warn('Error creating duck:', error);
      }
    );
  };

// DELETE DUCK ================================================================
  controller.deleteDuck = function (duckId){
    DuckFactory.deleteOne(duckId).then(
    function success (response) {
      console.log('duck deleted:', response);
    },
    function error(error) {
      console.log('error deleting duck', error);
    }
  );
  };


// EDIT ========================================================================
  controller.editDuck = function (duckId){
    $state.go( 'edit',{ duckId: duckId });
  };

// UPDATE DUCK ==============================================================
  controller.updateDuck = function () {
    DuckFactory.editOne(controller.selectedDuck.duck).then(
      function success(response) {
        console.log('duck updated:', response);
      },
      function error(error) {
        console.warn('Error updating duck:', error);
      }
    );
  };


// INITILISING FUNCTION =====================================================
  function init() {
    console.log(controller);
    controller.selectedDuck = undefined;
    controller.allDucks = [];
// make an API call to retrieve the data 'controller.allDucks=[];'


    controller.newDuck = {};
    controller.colors = ['red', 'orange', 'yellow'];

// referred to as a promise becasue of '.then'
    DuckFactory.getAll().then(
      function (response) {
        controller.allDucks = response.data;
        console.log('allDucks:', controller.allDucks); //when there is a success
      },
      function (error) {
        console.log('Error getting ducks', error); //when there isa fauiluer
      }
    );
  }
  init();
}


angular
  .module('DuckApp')
  .controller('DuckController', DuckController);
