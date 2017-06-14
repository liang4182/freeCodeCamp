// Return the length of the longest word in the provided sentence.
function findLongestWord(str) {
  var myArray = str.split(" ");
  var wordLength = 0;
  for(var i=0; i<myArray.length; i++){
    if (wordLength < myArray[i].length){
      wordLength = myArray[i].length;
    }
  }
  return wordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
