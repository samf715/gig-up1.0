'use strict';

/* Controllers */

var gigupControllers = angular.module('gigupControllers', ['firebase']);

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

//gigupControllers.controller('DbController',['$scope', '$firebase', function($scope, $firebase){
//    var ref = new Firebase('https://gigup.firebaseio.com');
//    $scope.useradd = $firebase(ref).$asArray();
//
//    $scope.addUser = function(e) {
//        if (e.keyCode === 13 && $scope.userbases) {
//            var name = $scope.name || 'anonymous';
//            $scope.useradd.$add({
//                from: name,
//                body: $scope.userbases
//            });
//            $scope.name = '';
//            $scope.userbases = "";
//        }
//    }
//}]);