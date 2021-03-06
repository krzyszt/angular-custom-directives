'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('DirectiveTestCtrl', ['$scope', function($scope) {
        $scope.text = 'Iam test text';
  }])
  .controller('DirectiveToControllerCtrl', ['$scope', function($scope) {
        $scope.loadSomeStuff = function(){
           alert('Loading some stuff!');
        };
        
        $scope.deleteSomeStuff = function(){
           alert('Deleting some stuff!');
        };
  }])
  .controller('GridCtrl',['$scope', function($scope){
        
        $scope.pane = {
           title: 'Custom Grid',
           body: 'Grid body'
        };
        
  }]);
