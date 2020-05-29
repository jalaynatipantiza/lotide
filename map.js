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
    console.log(`✅✅✅ [${arrayA}] === [${arrayB}]`);
  } else {
    console.log(`❌❌❌ [${arrayA}] !== [${arrayB}]`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, func) {
  const results = [];
  for (let item of array) {
    results.push(func(item));
  }
  return results;
};

const result1 = map(words, word => word[0]);
console.log(result1);

// map([1, 2, 3, 4], num => num * 2)
// map(["one", "two", "three"], word => word[1])
// map([], word => word[1])

/**
 * 1. Happy path - everything expected
 * 2. Sad path - empty array, function doesn't match the data
 */


assertArraysEqual([2, 4, 6, 8], map([1, 2, 3, 4], num => num * 2));
assertArraysEqual(["one", "two", "three"], map(["one", "two", "three"], word => word[1]));
assertArraysEqual([], map([], word => word[1]));


