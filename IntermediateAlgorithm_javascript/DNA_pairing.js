/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
*/

function pairElement(str) {
  var results = [];
  var strAsArr = str.split("");
  for(var i = 0; i < strAsArr.length; i++){
    var arr = [];
    arr.push(strAsArr[i]);
    switch (strAsArr[i]){
      case "A":
        arr.push("T");
        break;
      case "T":
        arr.push("A");
        break;
      case "C":
        arr.push("G");
        break;
      case "G":
        arr.push("C");
        break;
      default:
        arr.push("F");
    }
    results.push(arr);
  }
  return results;
}

pairElement("GCG");
