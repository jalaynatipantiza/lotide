
//compares two arrays and makes sure they are a perfect match
const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ ${arrayA} === ${arrayB}`);
  } else {
    console.log(`❌❌❌ ${arrayA} !== ${arrayB}`);
  }
};
// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);