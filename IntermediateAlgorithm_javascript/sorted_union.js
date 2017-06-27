/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
*/

function uniteUnique(arr) {
  var newArr = [];
  var temp = [];
  for(var i = 0; i < arguments.length; i++){
    for(var j = 0; j < arguments[i].length; j++){
      if(newArr.indexOf(arguments[i][j]) < 0){
        newArr.push(arguments[i][j]);
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
