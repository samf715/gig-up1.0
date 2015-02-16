'use strict';

/* Controllers */

var gigupControllers = angular.module('gigupControllers', []);

gigupControllers.controller('EventListCtrl', ['$scope', 'Event',
  function($scope, Event) {
    $scope.events = Event.query();
    $scope.orderProp = 'age';
  }]);

gigupControllers.controller('EventDetailCtrl', ['$scope', '$routeParams', 'Event',
  function($scope, $routeParams, Event) {

      console.log(">>>>>>>",$routeParams.eventId);
    $scope.event = Event.get({eventId: $routeParams.eventId}, function(event) {
      $scope.mainImageUrl = event.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
