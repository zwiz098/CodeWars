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
