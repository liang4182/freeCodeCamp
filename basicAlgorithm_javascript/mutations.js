/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array,
ignoring case of the letters.
*/

function mutation(arr) {
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
  var arr2Split = arr2.split("");
  var count = 0;
  for(var i = 0; i < arr2Split.length; i++){
    if(arr1.indexOf(arr2Split[i]) < 0){
      return false;
    }
  }  
  return true;
}

mutation(["hello", "hey"]);
