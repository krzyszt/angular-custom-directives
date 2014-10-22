'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.directives.behaviours'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/custom-directives', {templateUrl: 'partials/custom.tpl.html', controller: 'DirectiveTestCtrl'});
  $routeProvider.when('/behaviours', {templateUrl: 'partials/behaviours.tpl.html', controller: 'DirectiveTestCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
