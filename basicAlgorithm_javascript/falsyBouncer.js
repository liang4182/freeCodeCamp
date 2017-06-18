/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = arr.filter(function(val){
    return !(val === false || val === null || val === 0 || val === "" || val === undefined || isNaN(val));
    }
  );
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
