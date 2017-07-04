/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  var temp;
  for(var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      //recursion of a function to flatten the array
      temp = steamrollArray(arr[i]);
      
      //since it returns an array, need .concat to form a single array
      newArr = newArr.concat(temp);
    }else{
      newArr.push(arr[i]);
    }
    
  }
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
