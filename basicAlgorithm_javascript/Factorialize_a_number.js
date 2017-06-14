// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

function factorialize(num) {
  if (num === 0){
    num = 1;
  }
  for(var i = num; i > 1; i--){
    num *= (i - 1);
  }
  return num;
}

factorialize(5);
