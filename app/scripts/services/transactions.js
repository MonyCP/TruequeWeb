'use strict';

/**
 * @ngdoc service
 * @name truequewebApp.transactions
 * @description
 * # transactions
 * Factory in the truequewebApp.
 */
angular.module('truequewebApp')
  .factory('transactions', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
