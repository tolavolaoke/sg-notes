describe('TodosController', () => {
  let controllerToTest;

  beforeEach(() => {
    module('todoApp');
    inject(($controller) => {
      controllerToTest = $controller('TodosController');
    });
  });


  describe('initilisation', () => {
    it('shoud initialise list correctly', () => {
      expect(controllerToTest.list).toEqual([]);
    });
    it('shoud initialise inputText correctly', () => {
      expect(controllerToTest.inputText).toEqual('');

    });
  });
});
