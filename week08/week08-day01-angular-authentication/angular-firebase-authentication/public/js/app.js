function MainRouter ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/home.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/states/signup.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/states/login.html'
    })
    .state('authRequired', {
      url: '/authrequired',
      templateUrl: '/states/authRequired.html'
    })
    .state('secret', {
      url: '/secret',
      templateUrl: '/states/secret.html',
      resolve:{
        currentAuth:(AuthFatory )= {}
      }
    });
}

function AuthCatcher($rootScope, $state) {

    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('auth-required');
      }

    });

AuthCatcher.$inject = ['$rootScope', '$scope'];




angular
  .module('myApp', ['ui.router', 'firebase'])
  .config(MainRouter)
  .run(AuthCatcher);
