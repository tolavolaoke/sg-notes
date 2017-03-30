## Notes on how Angular works:
```shell
bower init
```

```shell

bower install --save angular
```
## Set up index.html
## include angular in the script from bower
## include app.js in script


### within index.html:
Everything in the curly braces is executed.
angular is going to parse the page and look for the curly braces and evaluates whats within it. {{ }}

<!-- 'ng-app="My First App"' corresponds to 'My First App in the app.js file', will be looking in the DOM for the attribute 'My First App', 'ng' is an indicator that it is something to do with angular -->

``` html
<html lang="en" ng-app ="myFirstApp">
```

``` javascript
angular
.module('myFirstApp', [])
.controller('HomeController', HomeController);
```

// Can be written like this: .controller('HomeController', function (){
// });
// creates the controller
// This controller is going to be a part of the My First App controller
// square brackets lets us know its an app



```console.log('home.controller.js');
```

//to test it works in the console browser

// setting up the entire angular for this application
// only done once
// var app = angular.module('myFirstApp', []);
