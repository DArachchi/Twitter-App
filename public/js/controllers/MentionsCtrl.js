'use strict';

angular.module('mentions', ['ngMaterial', 'ngRoute'])
    .controller('MentionsCtrl', ['$scope', 'tweetFactory', function($scope, tweetFactory) {
    $scope.userSearch;
    $scope.submit = function() {
        tweetFactory.query({username: $scope.userSearch}, function(tweets) {

            // Put all instances of user mentions into an array called 'mentions'
            var mentions = [];
            for (var i=0; i<tweets.length; i++) {
                for (var j=0; j<tweets[i].entities.user_mentions.length; j++) {
                    mentions.push(tweets[i].entities.user_mentions[j].name + " (" + tweets[i].entities.user_mentions[j].screen_name + ")");
                }
            }

            // Fill the 'counter' object with key-value pairs for each mention and how many times it was used
            var counter = {};
            for (var i = 0; i<mentions.length; i++) {
                var num = mentions[i];
                counter[num] = counter[num] ? counter[num] + 1 : 1;
            }

            // Fill arrays for labels and counts from the 'counter' object
            $scope.mentionLabels = [];
            $scope.counts = [];
            Object.keys(counter).forEach(function(key) {
                $scope.mentionLabels.push(key);
                $scope.counts.push(counter[key]);
            });
        })
    }
  }]);