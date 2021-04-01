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
