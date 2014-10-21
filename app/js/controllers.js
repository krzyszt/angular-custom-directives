'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('DirectiveTestCtrl', ['$scope', function($scope) {
        $scope.text = 'Iam test text';
  }]);
