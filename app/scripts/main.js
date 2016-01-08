/*jshint unused: vars */
require.config({
  paths: {
    jquery: '../../bower_components/jquery/jquery',
    angular: '../../bower_components/angular/angular',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks'
  },
  shim: {
    angular: {
      deps: [
        'jquery'
      ],
      exports: 'angular'
    },
    'angular-cookies': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-ui-router': {
      deps: [
        'angular'
      ],
      exports: 'uiRouter'
    }
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'app',
  'jquery',
  'angular',
  'angular-cookies',
  'angular-resource',
  'angular-ui-router'
], function(app, $, angular, ngCookies, ngResource, uiRouter) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
