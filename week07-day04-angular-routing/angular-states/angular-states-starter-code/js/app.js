//add routes the routest so that the states change on the SPA index.html without having to make multiple pages

function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { //name of the state
      url: '/',  //url of the state
      templateUrl: '../states/home.html' //template of the state
    })
    .state('about', {
      url: '/about',
      templateUrl: '../states/about.html'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: '../states/contact.html'
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('angularstates', ['ui.router'])
  .config(mainRouter);

// ui router is the array of dependencies
