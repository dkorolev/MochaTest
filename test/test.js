var assert = require('assert');

var code = require('../primes.js');

describe('nextPrime', function() {
  it('should return the next prime number after 7', function() {
    assert.equal(11, code.nextPrime(7));
  });

  it('confirms that zero and one are not prime numbers', function() {
    assert.equal(2, code.nextPrime(0));
    assert.equal(2, code.nextPrime(1));
  });
});
