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
