'use strict';

/**
 * @ngdoc service
 * @name truequewebApp.products
 * @description
 * # products
 * Factory in the truequewebApp.
 */
angular.module('truequewebApp')
  .factory('products', function () {
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
