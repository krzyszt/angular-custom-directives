'use strict';

/* Directives */


var appMod = angular.module('myApp.directives', []);
appMod.directive('custom', function() {
   return {
      restrict: 'E',
      template: '<div class="jumbotron"> This is a custom directive!</div>'
   };
});
