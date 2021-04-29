// Instructions
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

//Solution
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if(fuelLeft * mpg >= distanceToPump ){
    return true
  }else{
    return false
  }
};

//Tests

const assert = require("chai").assert;

describe("zeroFill", function() {
  it("Sample Tests", function() {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});



//Instructions

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

//Solution
function vowelIndices(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var foundIndexes = []

  for (let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i].toLowerCase()) > -1) {
      foundIndexes.push(i + 1);
    }
  }
  return foundIndexes;
}

//Tests
describe("Basic tests", function(){
Test.assertSimilar(vowelIndices("mmm"), []);
Test.assertSimilar(vowelIndices("apple"), [1,5]);
Test.assertSimilar(vowelIndices("super"), [2,4]);
Test.assertSimilar(vowelIndices("orange"), [1,3,6]);
Test.assertSimilar(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
});


//Instructions
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//Solutions
function isIsogram(str){

  return !/(\w).*\1/i.test(str)
  //regexes

}

//Tests
Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
Test.assertSimilar( isIsogram("isogram"), true );
Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
Test.assertSimilar( isIsogram("isIsogram"), false );
Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );
