function TodosFactory() {
  const list = [];

  return {
    list, //same as list:list,
    add: (item) => list.push(item),
    clear: () => list.splice(0)
  };
}

angular
  .module('todosApp')
  .factory('TodosFactory', TodosFactory);
