// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  var myArray = str.split(" ");
  var myArray2 = [];
  for (var i = 0; i < myArray.length; i++){
    myArray[i] = myArray[i].toLowerCase();
    myArray2 = myArray[i].split("");
    myArray2[0] = myArray2[0].toUpperCase();
    myArray[i] = myArray2.join("");
  }
  str = myArray.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
