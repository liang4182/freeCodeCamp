/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  // Remove all the values
  var newArr = Array.from(arguments);
  var arr1 = newArr.shift();
  var removed = arr1.filter(function(val){
    return !newArr.includes(val);
  });
  
  return removed;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
