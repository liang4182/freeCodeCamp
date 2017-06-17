/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
  var maxVal = arr.reduce(function(a,b){
    return Math.max(a,b);
  });
  var minVal = arr.reduce(function(a,b){
    return Math.min(a,b);
  });
  var sumResult = 0;
  for(var i = minVal; i <= maxVal; i++){
    sumResult += i; 
  }
  return sumResult;
}

sumAll([1, 4]);
