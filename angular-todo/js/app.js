//add routes the routest so that the states change on the SPA index.html without having to make multiple pages

function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../states/home.html'
    })
    // New
    .state('new', {
      url: '/home/new',
      templateUrl: '../states/new.html'
    })
    // Delete
    .state('delete', {
      url: '/home/:id',
      templateUrl: '../states/home.html'
    })
    // Edit
    .state('edit', {
      url: '/home/:id/edit',
      controller: function(controller, $stateProvider) {
        controller.id = $stateProvider.id;
      }
      // templateUrl: '../state/home.html'
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('angulartodo', ['ui.router'])
  .config(mainRouter);
