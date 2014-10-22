'use strict';

/* Directives */


var appMod = angular.module('myApp.directives.behaviours', []);

appMod.directive('enter', function(){
   return function(scope, element){
      element.bind('mouseenter', function(){
         console.log('Inside');
      });
   };
});

appMod.directive('leave', function(){
   return function(scope, element){
      element.bind('mouseleave', function(){
         console.log('Out');
      });
   };
});