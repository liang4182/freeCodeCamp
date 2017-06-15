//Shorten the strings
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var strTruncated;
  if (str.length > num){
    if (num < 4){
      strTruncated = str.slice(0, num - str.length);
    }
    else{
      strTruncated = str.slice(0, num - 3);
    }
    return strTruncated + "...";
  }
  return str;
}

$(document).ready(function() {
  var users = ["ESL_SC2", "freecodecamp", "comster404"];
  var crossOriginURL = "https://cors-anywhere.herokuapp.com/";
  var endpoint = "https://wind-bow.gomix.me/twitch-api/";
  
  //iterate through potential users
  users.forEach(function(val) {
    var html = "";
    var accountStatus;
    
    //first ajax request for user data
    $.ajax({
      url: crossOriginURL + endpoint + "users/" + val,
      dataType: "json",
      type: "GET"
    }).then(function(userInfo){
      var keys = Object.keys(userInfo);
      if (keys[0] === "error") {
        html = "<div class='row'>" + 
          "<div class='col-md-3'><img class='logo' src = 'https://dummyimage.com/100x100/ecf0e7/5c5457.jpg&text=404'></div>" +
          "<div class='col-md-3'><p class='name'>" + val + "</p></div>" +
          "<div class='col-md-6'><p class='status'>This user does not exist</p></div></div>";
        accountStatus = false;
      }else{
        html = "<div class='row'>" + 
          "<div class='col-md-3'><img class='logo' src = '" + userInfo.logo + "' ></div>" + 
          "<div class='col-md-3'><p class='name'><a href='https://www.twitch.tv/" + userInfo.display_name + "' target='_blank'>" + userInfo.display_name + "</a></p></div>";
        accountStatus = true;
      }
      
      //second ajax request for streaming data
      return $.ajax({
      url: crossOriginURL + endpoint + "streams/" + val,
      dataType: "json",
      type: "GET"
      });
      //end the first .then() function
    }).then(function(streamInfo){
      if (accountStatus){
        if (streamInfo.stream === null) {
          html += "<div class='col-md-6'><p class='status'>Offline</p></div></div>";
        } else {
          html += "<div class='col-md-6'><p class='status'>" + streamInfo.stream.game + ">>>" + 
            truncateString(streamInfo.stream.channel.status, 33) + "</p></div></div>";
        }
      }
      
      //render the html page
      $(".display-panel").append(html);
    });//end the second .then() function
    
  }); //end iteration
  
});
