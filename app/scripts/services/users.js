'use strict';

/**
 * @ngdoc service
 * @name truequewebApp.users
 * @description
 * # users
 * Factory in the truequewebApp.
 */
angular.module('truequewebApp')
  .factory('users', function () {
    return $resource('http://localhost:3000/users/:id.json');
  });
