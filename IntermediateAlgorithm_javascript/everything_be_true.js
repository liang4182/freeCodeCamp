/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
*/

function truthCheck(collection, pre) {
  // Is everyone being true?
  var val;
  for(var i = 0; i < collection.length; i++){
    val = collection[i][pre];
    if(val === false || val === null || val === 0 || val === "" || val === undefined || Number.isNaN(val)){
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
