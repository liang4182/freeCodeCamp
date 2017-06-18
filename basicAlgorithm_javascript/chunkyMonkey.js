/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them 
as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var iteration = Math.floor(arr.length / size);
  var pointer = 0;
  for(var i = 0; i < iteration; i++){
    newArr.push(arr.slice(pointer, pointer + size));
    pointer += size;
  }
  if(arr.length % size !== 0){
    newArr.push(arr.slice(- arr.length % size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
