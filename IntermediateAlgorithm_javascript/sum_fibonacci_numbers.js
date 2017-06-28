/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
*/

function sumFibs(num) {
  var fibo = [1, 1];
  while(fibo[fibo.length-1] <= num){
    fibo.push(fibo[fibo.length-1]+fibo[fibo.length-2]);
  }
  fibo.pop();
  
  //remove even numbers
  fibo = fibo.filter(function(val){
    return val % 2 !== 0;
  });
  
  //summarise the array
  var results = fibo.reduce(function(acc, val){
    return acc + val;
  }, 0);
  
  return results;
}

sumFibs(75025);
