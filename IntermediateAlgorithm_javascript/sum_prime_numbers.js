/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.
*/

function sumPrimes(num) {
  if(num < 2){
    return "There is no prime number";
  }
  
  //find prime numbers that are not larger than the input 'num'
  var prime = [];
  var flag;
  for(var i=2; i<=num; i++){
    flag = true;
    if(i === 2){
      prime.push(i);
    }else{
      for(var j=2; j<=i/2; j++){
        if(i%j === 0){
          flag = false;
          break;
        }
      }
      if(flag){
        prime.push(i);
      }
    }
  }
  
  //summarise all prime numbers
  var results;
  results = prime.reduce(function(acc,val){
    return acc + val;
  }, 0);
  
  return results;
}

sumPrimes(10);
