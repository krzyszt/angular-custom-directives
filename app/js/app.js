'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/custom-directives', {templateUrl: 'partials/view.tpl.html', controller: 'DirectiveTestCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
