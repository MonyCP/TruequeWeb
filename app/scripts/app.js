'use strict';

/**
 * @ngdoc overview
 * @name truequewebApp
 * @description
 * # truequewebApp
 *
 * Main module of the application.
 */
angular
  .module('truequewebApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/products',{
        templateUrl: 'views/product-list.html',
        controller: 'ProductCtrl',
        controllerAs: 'about'
      })
      .when('/product/users',{
        templateUrl: 'views/product-list-user.html',
        controller: 'ProductCtrl',
        controllerAs: 'about'
      })
      .when('/products/creat',{
        templateUrl: 'views/product-creat.html',
        controller: 'ProductCtrl',
        controllerAs: 'about'
      })
      .when('/products/edit',{
        templateUrl: 'views/product-edit.html',
        controller: 'ProductCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
