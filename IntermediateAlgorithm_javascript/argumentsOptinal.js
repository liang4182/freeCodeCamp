/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  //if either argument is not a valid number, return undefined
  if(arguments.length === 2){
    for(var i = 0; i < arguments.length; i++){
      if(typeof(arguments[i]) !== 'number'){
        return undefined;
      }
    }
    return arguments[0] + arguments[1];
  }
  
  //if there is a single argument
  else if(arguments.length === 1){
    if(typeof(arguments[0]) !== 'number'){
      return undefined;
    } 
    else{
      var firstVar = arguments[0];
      return function sumTwoAnd(){
        if(typeof(arguments[0]) !== 'number'){
          return undefined;
        }
        else{
          return firstVar + arguments[0];
        }
      };
    }
  }
  
  // if the number of arguments is not correct
  else{
    return undefined;
  }  
}

addTogether(2,3);
