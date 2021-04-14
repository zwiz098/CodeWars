// Instructions

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Solution
//it took me a while to figure out how to get the string without a space at the end
function reverseWords(string){
    var word = "", output = "";
    for(var i = string.length - 1; i >= 0; i--) {
        if (string[i] == " ") {
            output = " " + word + output;
            word = "";
        }
        else {
            word += string[i];
        }
    }
    return word + output;
}

//Test
Test.describe('Sample Tests', _ => {
  Test.it('Should pass Sample tests', _ => {
    Test.assertEquals(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    Test.assertEquals(reverseWords('apple'), 'elppa');
    Test.assertEquals(reverseWords('a b c d'), 'a b c d');
    Test.assertEquals(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});




// Instructions

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//Solution
  var pairs = {'A':'T','T':'A','C':'G','G':'C'};
  function DNAStrand(dna) {
    return dna.replace(/./g, function(y) {
      return pairs[y];
    });
  }


//Test
Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");





// Instructions

//You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
// The returned value must be a string, and have "***" between each of its letters.
//
// You should not remove or add elements from/to the array.

//Solution
function twoSort(s) {
 let alpha = s.sort();
 let alphaArr = alpha[0].split('').join('***')
 return alphaArr
}



//Test
describe("Basic tests",_=>{
Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
});


//Instructions

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

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
