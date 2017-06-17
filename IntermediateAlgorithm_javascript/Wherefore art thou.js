/* 
   Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching 
   property and value pairs (second argument). Each property and value pair of the source object has to be present in the object 
   from the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  var keyLength = keys.length;
  
  for (var i = 0; i < collection.length; i++){
    var count = 0;
    for(var key in keys){
      if(collection[i].hasOwnProperty(keys[key]) && collection[i][keys[key]] === source[keys[key]]){
        count++;
        if (count === keyLength) {
          arr.push(collection[i]);
        }
      } else {
        break;
      }
    }
  }
    
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
