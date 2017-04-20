describe('TodosController', () => {
  let controllerToTest;
  let MockTodosFactory; // A pretend version of the TodosFactory

  beforeEach(() => {
    module('todosApp');
    MockTodosFactory = {
      list: [],
      add: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };
    inject(($controller) => {
      // creating an instance using the controllerToTest
      controllerToTest = $controller('TodosController', { TodosFactory: MockTodosFactory });
    });
  });

  describe('initialisation', () => {
    it('Should initialise list correctly', () => {
      expect(controllerToTest.list).toEqual([]);
    });
    it('Should initialise inputText correctly', () => {
      expect(controllerToTest.inputText).toEqual('');
    });
  });

//Test for add
  describe('add()', () => {
    it('Should call TodosFactory.add() with correct parameter', () => {
      const inputText = 'new todo 1';

      controllerToTest.inputText = inputText;
      controllerToTest.add();
      expect(MockTodosFactory.add).toHaveBeenCalledWith(inputText);
    });
    it('Should clear inputText', () => {
      const inputText = 'new todo 2';

      controllerToTest.inputText = inputText;
      controllerToTest.add();
      expect(controllerToTest.inputText).toEqual('');
    });
  });

  // Test for submit button disabled
  describe('isSubmitButtonDisabled()', () => {
    it('Should return true when input text is empty', () => {
      controllerToTest.inputText = '';
      expect(controllerToTest.isSubmitButtonDisabled()).toEqual(true);
    });
    it('Should return false when input text is not empty', () => {
      controllerToTest.inputText = 'newtodo';
      expect(controllerToTest.isSubmitButtonDisabled()).toEqual(false);

    });
  });

  // Test for clear button disabled
  describe('isClearButtonDisabled()', () => {
    it('Should return true if the list is empty', () => {
      const list = [];
      controllerToTest.list = list;
      expect(controllerToTest.isClearButtonDisabled()).toEqual(true);
    });
    it('Should return false if the list is not empty', () => {
      const list = ['test todo 1', 'test todo 2'];
      controllerToTest.list = list;
      expect(controllerToTest.isClearButtonDisabled()).toEqual(false);
    });
  });

  // Test for clear
  describe('clear()', () => {
    it('Should call TodosFactory.clear ()', () => {
      controllerToTest.clear();
      expect(MockTodosFactory.clear).toHaveBeenCalled();
    });
  });
});
