/*jshint unused: vars */
define(['angular']/*deps*/, function (angular)/*invoke*/ {
  'use strict';

  return angular
    .module('labtimeApp', [
      'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider.state("home", {
        url: "/",
        templateUrl: "/views/main.html"
      }).state("about", {
        url: "/about",
        templateUrl: "/views/about.html"
      }).state("contact", {
        url: "/contact",
        templateUrl: "/views/contact.html"
      });
    });
});
