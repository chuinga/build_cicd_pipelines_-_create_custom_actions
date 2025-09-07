const assert = require('assert');

// Simple test that always passes
try {
  assert.equal(1, 1);
  console.log('✓ Test passed: 1 equals 1');
  process.exit(0);
} catch (error) {
  console.error('✗ Test failed:', error.message);
  process.exit(1);
}
