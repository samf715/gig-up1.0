'use strict';

/* Filters */

angular.module('gigupFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
