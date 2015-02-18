'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('gigupApp'));

  // Test service gigs
  it('check the existence of Event factory', inject(function(Phone) {
      expect(Phone).toBeDefined();
    }));
});