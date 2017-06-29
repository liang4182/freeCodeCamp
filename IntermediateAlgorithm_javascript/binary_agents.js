/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
  var strArr = str.split(" ");
  var newArr = [];
  var count;
  for(var i = 0; i < strArr.length; i++){
    count = 0;
    for(var j = 0; j < strArr[i].length; j++){
      if(strArr[i][j] === "1"){
        count += Math.pow(2, strArr[i].length - j - 1);
      }
    }
    newArr.push(String.fromCharCode(count));
  }
  newArr = newArr.join("");
  return newArr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
