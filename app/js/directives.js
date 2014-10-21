'use strict';

/* Directives */


var appMod = angular.module('myApp.directives', []);

appMod.directive('custom', function() {
   return {
      restrict: 'E',
      template: '<div class="jumbotron"> This is a custom directive!</div>'
   };
});

appMod.directive('classDir', function() {
   return {
      restrict: 'C',
      template: '<div class="jumbotron"> This is a class directive!</div>'
   };
});

appMod.directive('attrDir', function(){
   return {
      restrict: 'A',
      link: function(){
         alert('This is attribute directive!');
      }
   };
});

appMod.directive('commentDir', function(){
   return {
      restrict: 'M',
      link: function(){
         alert('This is comment directive!');
      }
   };
});
