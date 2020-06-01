
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle;

