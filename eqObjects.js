//displays wether given value is as expected
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  }
};
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
    }
  }
  return true;
};


//testing for primitive types
console.log("Testing for primitive types:");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);


//testing for arrays
console.log("Testing arrays:");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);