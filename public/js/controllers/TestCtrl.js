'use strict';

angular.module('test', ['ngRoute'])
  .controller('TestCtrl', ['$scope', function($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
  }]);