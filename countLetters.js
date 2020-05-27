const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  }
};

//count lettters
const countLetters = function(sentence) {
  const count = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};
// console.log(countLetters("lighthouse in the house"));

assertEqual(JSON.stringify(countLetters("hello")), JSON.stringify({h: 1, e: 1, l: 2, o: 1}));
assertEqual(JSON.stringify(countLetters("he llo")), JSON.stringify({h: 1, e: 1, l: 2, o: 1}));