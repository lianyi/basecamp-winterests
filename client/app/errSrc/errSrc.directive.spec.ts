'use strict';

describe('Directive: errSrc', function() {
  // load the directive's module and view
  beforeEach(module('basecampWinterestsApp.errSrc'));
  beforeEach(module('app/errSrc/errSrc.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<err-src></err-src>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the errSrc directive');
  }));
});
