describe('DuckController', () => {
  let controllerToTest;
  let httpBackend;
  let mock$State;
  let mock$StateParams;
  let testDuckId;
  let API_URL;
// we are going to be using some variables and they will need to be accesssible and any consts


// 'beforeEach' will happen before each 'IT' block
  beforeEach(() => { //before every test function
    module('DuckApp'); // tHIS IS THE NME OF THE ANGULAR APPLICATION, calls DuckApp from ng-controller
    inject(($controller, $httpBackend, _API_URL_) => {
      // creating an instance using the controllerToTest
      API_URL = _API_URL_;
      httpBackend = $httpBackend;
      mock$State = { // list of all methods that have been used in the controller
        go: jasmine.createSpy() //call a function to check if its being called, 'createSpy' it creates a new function by doing this
      };
      mock$StateParams = {
        duckId: testDuckId // dont need to use createSpy becasue in the controller it is a string
      };
        // controllerToTest creating an instance of a controller using the controllerToTest listed with the same dependencies injected in the controller
      controllerToTest = $controller('DuckController', {
        $stateParams: mock$StateParams,
        $state: mock$State
      });
    });
  });


//IT BLOCKS = it()
  describe('initialisation', () => { //On initialisation...
    it('Should populate allDucks with correct data', () => {
      const testDucks = ['duck one', 'duck two'];

      httpBackend //On initialisation
          .expect('GET', `${API_URL}/ducks`)// expecting a HTTP GET call to this url
          .respond(testDucks); //AND respond with testDucks defined above as const
      httpBackend.flush(); // need to flush after a http call has been made
      expect(controllerToTest.allDucks).toEqual(testDucks); // testing that the controller matches the mock controller????
      httpBackend.verifyNoOutstandingExpectation(); //to makes sure that there are no other expectations that will pass the test

    });
  });

  describe('editDuck()',() => {
    it('Should go to "edit" state with specified duckId', () => {
      const testDuckId = 'quark';

      controllerToTest.editDuck(testDuckId);
      expect(mock$State.go).toHaveBeenCalledWith('edit', { duckId: testDuckId });
    });



  });
});
