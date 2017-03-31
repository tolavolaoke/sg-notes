//add routes the routest so that the states change on the SPA index.html without having to make multiple pages

function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
  // Home
    .state('home', {
      url: '/',
      templateUrl: '../states/home.html'
    })

  // New
    .state('new', {
      url: '/new',
      templateUrl: '../states/new.html'
    })

// Edit
.state('edit', {
  url: '/edit',
  templateUrl: '../states/edit.html'
})

// Delete
.state('delete', {
  url: '/delete',
  templateUrl: '../states/delete.html'
});
  $urlRouterProvider.otherwise('/');
}

angular
  .module('angulartodo', ['ui.router'])
  .config(mainRouter);

// ui router is the array of dependencies
