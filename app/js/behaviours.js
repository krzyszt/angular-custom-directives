'use strict';

/* Directives */


var appMod = angular.module('myApp.directives.behaviours', []);

appMod.directive('enter', function(){
   return function(scope, element, attrs){
      element.bind('mouseenter', function(){
         element.addClass(attrs.enter);
      });
   };
});

appMod.directive('leave', function(){
   return function(scope, element, attrs){
      element.bind('mouseleave', function(){
         element.removeClass(attrs.enter);
      });
   };
});