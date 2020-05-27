
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

//logs two arrays are equal to eachother
const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ ${arrayA} === ${arrayB}`);
  } else {
    console.log(`❌❌❌ ${arrayA} !== ${arrayB}`);
  }
};

const middle = function(array) {
  let middleNum = [];
  if (array.length < 3) {
    return middleNum;
  } if (!(array.length % 2 === 0)) {
    let index = (array.length - 1) / 2;
    middleNum.push(array[index]);
    
  } else if (array.length % 2 === 0) {
    let index2 = array.length  / 2 - 1;
    middleNum.push(array[index2]);
    middleNum.push(array[index2 + 1]);
  }
  return middleNum;
};



assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);