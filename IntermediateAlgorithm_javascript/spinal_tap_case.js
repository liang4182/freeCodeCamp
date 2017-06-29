/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  //convert the first letter to lower case
  str = str.charAt(0).toLowerCase() + str.slice(1);
  
  //replace capital letters with its lower case counterpart with a preceeding space
  str = str.replace(/([A-Z])/g, " $1").toLowerCase();
  
  //replace underscore with a space
  str = str.replace(/_/g, " ");
  
  //replace one or more spaces with a dash
  str = str.replace(/\s+/g, "-");
  
  return str;
}

spinalCase('Teletubbies say Eh-oh');
