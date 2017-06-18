/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
*/

function rot13(str) { // LBH QVQ VG!
  var arr = [];
  var minimum = "A".charCodeAt(0);
  var maximum = "Z".charCodeAt(0);
  for(var i = 0; i < str.length; i++){
    arr[i] = str.charCodeAt(i);
    if (arr[i] >= minimum && arr[i] <= maximum){
      arr[i] -= 13;
      if (arr[i] < minimum){
        arr[i] += 26;
      }
    }
    arr[i] = String.fromCharCode(arr[i]);
  }
  
  return arr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
