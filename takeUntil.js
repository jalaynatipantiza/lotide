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

const takeUntil = function(array, callback) {
  const arr = [];
  for (const item of array) {
    if (callback(item)) {
      return arr;
    }
    arr.push(item);
  }
  return arr;
};

// takeUntil()


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);// 1,2,5,7,2,3,4,5
console.log('---');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual([1, 2, 5, 7, 2], results1);
assertArraysEqual(["I've", "been", "to", "Hollywood"], results2);