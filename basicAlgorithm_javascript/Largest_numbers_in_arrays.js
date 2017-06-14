// Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  // You can do this!
  var temp = [];
  var currentMax;
  for(var i = 0; i < arr.length; i++){
    currentMax = arr[i][0];
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] > currentMax){
        currentMax = arr[i][j];
      }
    }
    temp[i] = currentMax;
  }
  return temp;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
