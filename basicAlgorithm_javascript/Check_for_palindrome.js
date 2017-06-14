
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/[^0-9a-z]/g, "");
  var str2 = str.split("");
  str2.reverse();
  str2 = str2.join("");
  if(str == str2){
    return true;
  }
  return false;
}



palindrome("eye");
