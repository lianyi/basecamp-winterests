'use strict';
const angular = require('angular');
// import ngAnimate from 'angular-animate';
const ngCookies = require('angular-cookies');
const ngResource = require('angular-resource');
const ngSanitize = require('angular-sanitize');
const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');
// const ngMessages = require('angular-messages');
// import ngValidationMatch from 'angular-validation-match';
import 'angular-socket-io';
import 'imagesloaded';
import 'angular-masonry';


import {routeConfig} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import mywins from './mywins/mywins.component';
import errSrc from './errSrc/errSrc.directive';


import './app.less';

angular.module('winterestsApp', [
  ngCookies,
  ngResource,
  ngSanitize,

  'btford.socket-io',
  'wu.masonry',
  uiRouter,
  uiBootstrap,


  _Auth,
  account,
  navbar,
  footer,
  main,
  constants,
  socket,
  mywins,
  errSrc,
  util
])
  .config(routeConfig)
  .run(function ($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedIn(function (loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, ['winterestsApp'], {
      strictDi: true
    });
  });
