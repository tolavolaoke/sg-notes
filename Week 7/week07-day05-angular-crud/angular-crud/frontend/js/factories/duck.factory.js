function DuckFactory(API_URL, $http) {
  return {

    getAll: function () {
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks`
      });
    },
    getOne: function (id) {
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks/${id}`
      });
    },
    createOne: function(newDuck) {
      return $http({
        method: 'POST',
        url: `${API_URL}/ducks`,
        data: newDuck
      });
    },
    deleteOne: function (duckId) {
      return $http({
        method: 'DELETE',
        url: `${API_URL}/ducks/${duckId}`

      });
    }

  };
}

// the function returns the method 'get' http
// when are executinh a function and see .then() it will return a promise

angular
  .module('DuckApp')
  .factory('DuckFactory', DuckFactory);
