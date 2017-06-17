/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  var index = [];
  for(var i = 0; i < arr1.length; i++){
    var ele1 = arr1.slice(i)[0];
    var len = arr2.length;
    arr2 = arr2.filter(function(val){
      return val !== ele1;
    });
    if (arr2.length === len) {
      newArr.push(ele1);
    }
  }

  newArr = newArr.concat(arr2);
  
  // Same, same; but different.
  return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
