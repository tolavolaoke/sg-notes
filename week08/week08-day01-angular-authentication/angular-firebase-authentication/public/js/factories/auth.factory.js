/* global firebase*/

function AuthRun() {
// Initialize Firebase
  var config = {
    apiKey: 'AIzaSyCrL_R-IMU1ZAxTooLfZ-Y4Fifb1bDnDGw',
    authDomain: 'angularauth-c444a.firebaseapp.com',
    databaseURL: 'https://angularauth-c444a.firebaseio.com', //created a database
    projectId: 'angularauth-c444a',
    storageBucket: 'angularauth-c444a.appspot.com',
    messagingSenderId: '945700990132'
  };


  firebase.initializeApp(config);
}

function AuthFactory($firebaseAuth) {
  return $firebaseAuth();
}
AuthFactory.$inject = ['$firebaseAuth'];




angular
    .module('myApp')
    .run(AuthRun)
    .factory('AuthFactory', AuthFactory);
