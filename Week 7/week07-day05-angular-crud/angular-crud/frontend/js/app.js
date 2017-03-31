// The order of states is significant 
function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: '/ducks',
      templateUrl: '/states/home.html'
    })

    .state('new', {
      url: '/ducks/new',
      templateUrl: '/states/new.html'
    })

// on these objects there variables are available...

        .state('show', {
          url: '/ducks/:duckId',
          templateUrl: '/states/show.html'
        });


  $urlRouterProvider.otherwise('/ducks');

}


angular
  .module('DuckApp', ['ui.router'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter);
