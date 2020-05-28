
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
//Receives two objects and compares if identical can only handle arrays and primitive types
const eqObjects = function(object1, object2) {
  let object1Length = Object.keys(object1).length;
  let object2Length = Object.keys(object2).length;
  if (object1Length !== object2Length) {
    return false;
  }
  for (let key in object1) {
    if (object2[key]) {
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        if (!(eqArrays(object1[key], object2[key]))) {
          return false;
        }
      } else if (object2[key] !== object1[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({a: "1", b:"2"}, {b: "2", a:""});
assertObjectsEqual({a: "1", b:"2"}, {b: "2", a:"1"});

