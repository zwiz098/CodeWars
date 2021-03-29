//https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript

//This code does not execute properly. Try to figure out why.

function multiply(a, b){
 return a * b
}

// const assert = require("chai").assert;
//
// describe("Multiply", () => {
//   it("fixed tests", () => {
//     assert.strictEqual(multiply(1,1), 1);
//     assert.strictEqual(multiply(2,1), 2);
//     assert.strictEqual(multiply(2,2), 4);
//     assert.strictEqual(multiply(3,5), 15);
//   });
// });








// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
//
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


function pillars(num_pill, dist, width) {
  // your code here
  return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
}

// describe("Basic tests", function(){
//   it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm", function(){
//     Test.assertEquals(pillars(1, 10, 10) , 0);
//   });
//   it("Testing for number of pillars: 2, distance: 20 m and width: 25 cm", function(){
//     Test.assertEquals(pillars(2, 20, 25) , 2000);
//   });
//   it("Testing for number of pillars: 11, distance: 15 m and width: 30 cm", function(){
//     Test.assertEquals(pillars(11, 15, 30) , 15270);
//   });
// });





// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
}

// Test.assertEquals(squareSum([1,2]), 5)
// Test.assertEquals(squareSum([0, 3, 4, 5]), 50)





// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Test.assertEquals(disemvowel("This website is for losers LOL!"),
//   "Ths wbst s fr lsrs LL!")
// rat




//
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = num => (
  Array(num).fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0)
);

// describe('summation', function () {
//   it('should return the correct total', function () {
//     Test.assertEquals(summation(1), 1)
//     Test.assertEquals(summation(8), 36)
//   })
// })




// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let words = s.split(' ');
  let shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;//shortest word would be the first word in the new array
  }, words[0]);
  return shortest.length;
}

// Test.describe("Example tests",_=>{
// Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// });




//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if(number % 2 == 0 ){
    return("Even")
  }else{
    return ("Odd")
  }
}

//Test.assertEquals(even_or_odd(2), "Even")
// Test.assertEquals(even_or_odd(0), "Even")
// Test.assertEquals(even_or_odd(7), "Odd")
// Test.assertEquals(even_or_odd(1), "Odd")




// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

function isDivideBy(number, a, b) {
  if((number % a || number % b) == 0 ){
    return(true)
  }else{
    return(false)
  }
}

// Test.assertSimilar(isDivideBy(-12, 2, -6), true);
// Test.assertSimilar(isDivideBy(-12, 2, -5), false);
// Test.assertSimilar(isDivideBy(45, 1, 6), false);
// Test.assertSimilar(isDivideBy(45, 5, 15), true);
// Test.assertSimilar(isDivideBy(4, 1, 4), true);
// Test.assertSimilar(isDivideBy(15, -5, 3), true);




// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Notes:
//
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  let negNum = -num

  if(num > 0){
    return(negNum)
  }else if(num < 0){
    return(num)
  }else{
    return(num)
  }
}

// Test.assertEquals(makeNegative(42), -42);





// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers) {
  let numArr = numbers.split(' ')//divides strings into substrings to put back into an arry=>
  let obj = {}
  obj.evenCount = 0
  obj.oddCount = 0
  //console.log(numArr) to test .split

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {//create if to retrieve even numbers
      obj.evenCount += 1
      obj.even = i + 1
    } else {
      obj.oddCount += 1
      obj.odd = i + 1
    }

    if(obj.oddCount > 0 && obj.evenCount > 0 && obj.oddCount !== obj.evenCount) { //conditional

    }
  }

  if (obj.evenCount < obj.oddCount) {
    return (obj.even)
  } else {
    return (obj.odd)
  }
}

// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);




// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if(bool == false){
    return('No')
  }else{
    return('Yes')}
}

// Test.assertEquals(boolToWord(true), 'Yes')
// Test.assertEquals(boolToWord(false), 'No')
