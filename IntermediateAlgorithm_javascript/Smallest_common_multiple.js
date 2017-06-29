/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers 
in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.
*/

function smallestCommons(arr) {
  //create an array with numbers in the range between the two values
  var maxEle = arr.reduce(function(a,b){
    return Math.max(a,b);
  });
  var minEle = arr.reduce(function(a,b){
    return Math.min(a,b);
  });
  var newArr = [];
  for(var i = minEle; i<=maxEle; i++){
    newArr.push(i);
  }
  
  //find pairwise smallest common multiples
  var multiple;
  multiple = newArr.reduce(function(a, b){
    var temp = [];
    var min = Math.min(a, b);  
    for(var i=Math.ceil(min/2); i>=2; i--){
      if(a%i === 0 && b%i === 0){
        a = a / i;
        b = b / i;
        temp.push(i);
      }
    }
    if(temp.length === 0){
      return a * b;
    }else{
      temp = temp.reduce(function(a, b){
        return a * b;
      }, 1);
      return a * b * temp;
    }
    
});
  
  
  return multiple;
}


smallestCommons([1,5]);
