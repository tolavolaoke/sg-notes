function TodosFactory() {
  const list = [];

  return {
    list,
    add: (item) => list.push(item),
    clear: () => list.splice(0)
  };
}

angular
  .module('TodosApp')
  .factory('TodosFactory', TodosFactory);
