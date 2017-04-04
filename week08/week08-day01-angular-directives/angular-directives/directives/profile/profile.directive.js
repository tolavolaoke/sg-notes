angular
.module('angularDirectives') // name of the app (check index.html)
.directive('profile', function(){ // how angular is going to see this directive
  return{ //implements the directive by return the objects from the profile.directive.html file
    restrict: 'E', //this directive has to be an element 'E' iis element
    replace: true,
    templateUrl: 'directives/profile/profile.directive.html',
    scope: { //scope is an object, which is looking for an attribute with the following element
      person: '=' // = means two why binding

    },
    link: function(scope/*, element, attrs*/) { //this allows us to provide the view with a method  --element and attrs are other parameters that can be used.
      scope.showSkills = false; //sets the showSkills false so that is shows when the button assigned to it clicked

      scope.toggleSkills = function (){
        scope.showSkills = !scope.showSkills;
      };
    }

  };
});
