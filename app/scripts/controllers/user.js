'use strict';

/**
 * @ngdoc function
 * @name truequewebApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the truequewebApp
 */
angular.module('truequewebApp')
  .controller('UserCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.users = Users.query(function(){
      console.log('I am done loading users...')
      console.log($scope.users);
    }, function(error) {
      console.log('There was an error users', error.statusText);
    });
  });
