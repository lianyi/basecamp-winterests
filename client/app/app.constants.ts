'use strict';
const angular = require('angular');

export default angular.module('winterestsApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
