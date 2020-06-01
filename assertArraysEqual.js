const eqArrays = require('./eqArrays')

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ [${arrayA}] === [${arrayB}]`);
  } else {
    console.log(`❌❌❌ [${arrayA}] !== [${arrayB}]`);
  }
};

module.exports = assertArraysEqual;

