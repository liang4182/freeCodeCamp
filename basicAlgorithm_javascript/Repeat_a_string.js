// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num <= 0){
    return "";
  }
  
  var repeatedString = str;
  for(var i = 0; i < num - 1; i++){
    repeatedString += str;
  }
  
  return repeatedString;
}

repeatStringNumTimes("abc", 3);
