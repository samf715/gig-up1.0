'use strict';

/* App Module */

var gigupApp = angular.module('gigupApp', [
  'ngRoute',
  'gigupAnimations',

  'gigupControllers',
  'gigupFilters',
  'gigupServices'
]);

gigupApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/events', {
        templateUrl: 'partials/event-list.html',
        controller: 'EventListCtrl'
      }).
      when('/events/:eventId', {
        templateUrl: 'partials/event-detail.html',
        controller: 'EventDetailCtrl'
      }).
        //created a log in partial
        when('/login',{
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        }).
        when('/addEvent',{
            templateUrl: 'partials/addEvent.html',
            controller: 'AddEventController'
        }).
      otherwise({
        redirectTo: '/events'
      });
  }]);
