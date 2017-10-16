'use strict';

angular.module('hashtags', ['ngMaterial', 'ngRoute'])
    .controller('HashtagCtrl', ['$scope', 'tweetFactory', function($scope, tweetFactory) {
    $scope.userSearch;
    $scope.submit = function() {
        tweetFactory.query({username: $scope.userSearch}, function(tweets) {

            // Put all instances of hashtags into an array called 'hashtags'
            var hashtags = [];
            for (var i=0; i<tweets.length; i++) {
                for (var j=0; j<tweets[i].entities.hashtags.length; j++) {
                    hashtags.push(tweets[i].entities.hashtags[j].text);
                }
            }

            // Fill the 'counter' object with key-value pairs for each hashtag and how many times it was used
            var counter = {};
            for (var i = 0; i<hashtags.length; i++) {
                var num = hashtags[i];
                counter[num] = counter[num] ? counter[num] + 1 : 1;
            }

            // Fill arrays for labels and counts from the 'counter' object
            $scope.hashtagLabels = [];
            $scope.counts = [];
            Object.keys(counter).forEach(function(key) {
                $scope.hashtagLabels.push(key);
                $scope.counts.push(counter[key]);
            });
            $scope.createBubbleChart();
        });
    }

    $scope.bubbleOptions = {
        scales: {
            xAxes: [{
            display: false,
            ticks: {
                max: 125,
                min: -125,
                stepSize: 10
            }
            }],
            yAxes: [{
            display: false,
            ticks: {
                max: 125,
                min: -125,
                stepSize: 10
            }
            }]
        }
    };

    $scope.createBubbleChart = function () {
        $scope.data = [];
        for (var i = 0; i < $scope.hashtagLabels.length; i++) {
            $scope.data.push([{
            x: randomScalingFactor(),
            y: randomScalingFactor(),
            r: $scope.counts[i]
            }]);
        }
    }

    function randomScalingFactor () {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    }
  }]);