// Reverse the provided string.

function reverseString(str) {
  var array = str.split("");
  array.reverse();
  str = array.join("");
  return str;
}

reverseString("hello");
