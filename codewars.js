//Instructions:
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//Code:
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

//Test:
Test.assertEquals(makeNegative(42), -42);




//Instructions:
//There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

//Code:
function queueTime(customers, n) {
  var bag = new Array(n).fill(0);
  for (let t of customers) {
    let idx = bag.indexOf(Math.min(...bag));
    bag[idx] += t;

  }
  return Math.max(...bag);
}

//Test:
Test.assertEquals(queueTime([], 1), 0);
Test.assertEquals(queueTime([1,2,3,4], 1), 10);
Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);




//Instructions:
//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

//Code:
function stray(numbers) {

    let strayChar = numbers[0]
    if (strayChar !== numbers[1] && strayChar !== numbers[2]) return strayChar

    for(let i = 1; i < numbers.length; i++){
      if(strayChar !== numbers[i])return numbers[i]
    }
}


//Test:
Test.assertEquals(stray([1, 1, 2]), 2)
