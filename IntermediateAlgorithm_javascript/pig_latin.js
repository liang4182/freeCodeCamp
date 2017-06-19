/*
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  var vowels = ["a","e","i","o","u"];
  str = str.toLowerCase();
  for(var i = 0; i < str.length; i++){
    if(vowels.indexOf(str[i]) > -1){
      if (i === 0){
        str = str + "way";
      }else{
        str = str.slice(i) + str.slice(0, i) + "ay";
      }
      break;
    }
  }
  return str;
}

translatePigLatin("consonant");
