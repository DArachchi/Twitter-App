'use strict';

angular.module('test', ['ngRoute'])
  .controller('TestCtrl', ['$scope', '$routeParams', 'Tweet', function($scope, $routeParams, Tweet) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
    $scope.tweet = Tweet.query(function(tweet) {
        console.log(tweet);
    })
  }]);