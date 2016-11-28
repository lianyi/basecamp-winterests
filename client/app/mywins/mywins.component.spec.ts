'use strict';

describe('Component: MywinsComponent', function() {
  // load the controller's module
  beforeEach(module('basecampWinterestsApp.mywins'));

  var MywinsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MywinsComponent = $componentController('mywins', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
