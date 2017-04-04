//add routes the routest so that the states change on the SPA index.html without having to make multiple pages

function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { //name of the state
      url: '/',  //url of the state
      templateUrl: '../states/home.html' //template of the state
    })
    .state('cats', {
      url: '/cats',
      templateUrl: '../states/cats.html'
    })

    .state('frisbees', {
      url: '/frisbees',
      templateUrl: '../states/frisbees.html'
    })

    .state('monstertruck', {
      url: '/monstertruck',
      templateUrl: '../states/monstertruck.html'
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('angularstatespractice', ['ui.router'])
  .config(mainRouter);

// ui router is the array of dependencies
