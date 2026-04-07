const sum = require('./index');

function testSum() {
  if (sum(2, 3) !== 5) {
    throw new Error("Test failed: 2 + 3 should be 5");
  }
}

try {
  testSum();
  console.log("All tests passed ✅");
} catch (err) {
  console.error(err.message);
  process.exit(1);
}