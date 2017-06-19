/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  if (str.length < 2){
    return "Require a string longer than 2.";
  }
  
  for (var i = 0; i < str.length-1; i++){
    if (str.charCodeAt(i) + 1 !== str.charCodeAt(i+1)){
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  
  if(i === str.length-2){
    return undefined; 
  }
}

fearNotLetter("abce");
