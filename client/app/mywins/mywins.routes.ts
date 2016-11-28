'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('mywins', {
      url: '/mywins',
      template: '<mywins></mywins>'
    });
}
