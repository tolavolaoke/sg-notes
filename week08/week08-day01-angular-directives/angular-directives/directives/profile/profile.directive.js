angular
.module('angularDirectives') // name of the app (check index.html)
.directive('profile', function(){ // how angular is going to see this directive
  return{ //implements the directive by return the objects from the profile.directive.html file
    restrict: 'E', //this directive has to be an element 'E' iis element
    replace: true,
    templateUrl: 'directives/profile/profile.directive.html',
    scope: { //scope is an object, which is looking for an attribute with the following element
      person: '=' // = means two why binding

    }

  };
});
