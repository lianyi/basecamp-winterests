'use strict';
const angular = require('angular');

export default angular.module('basecampWinterestsApp.errSrc', [])
  .directive('errSrc', function() {
    return {
      template: require('./errSrc.html'),
      restrict: 'EA',
      link: function(scope, element, attrs) {
        element.bind('error', function() {
          if (attrs.src != attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
        attrs.$observe('ngSrc', function(value) {
          if (!value && attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
      }
    };
  })
  .name;
