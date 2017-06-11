$(document).ready(function(){
  var temperature, weather, iconText;
  //get geolocation data from browser
  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
    
    //Replace the [key] with API key from Dark sky app 
    var weatherURL = "https://api.darksky.net/forecast/[key]/" + position.coords.latitude + "," + position.coords.longitude + "?exclude=minutely,hourly,daily,alerts,flags";
    
    //Cross-origin request header
    var crossOriginURL = "https://cors-anywhere.herokuapp.com/";
    
    $.getJSON(crossOriginURL + weatherURL, function(json){
      var location = json.timezone;
      $("#location").html(location);
      //$("h2").html("Brisbane");
      temperature = json.currently.temperature;
      weather = json.currently.summary;
      iconText = json.currently.icon;
      
      $("#summary").html(weather);
      $("#temperature").html( Math.round(temperature));
      
      var icons = new Skycons({"color": "black"});
      switch (iconText){
        case "clear-day":
          icons.set("weather-icon", Skycons.CLEAR_DAY);
          break;
        case "clear-night":
          icons.set("weather-icon", Skycons.CLEAR_NIGHT);
          break;
        case "rain":
          icons.set("weather-icon", Skycons.RAIN);
          break;
        case "snow":
          icons.set("weather-icon", Skycons.SNOW);
          break;
        case "sleet":
          icons.set("weather-icon", Skycons.SLEET);
          break;
        case "fog":
          icons.set("weather-icon", Skycons.FOG);
          break;
        case "wind":
          icons.set("weather-icon", Skycons.WIND);
          break;
        case "cloudy":
          icons.set("weather-icon", Skycons.CLOUDY);
          break;
        case "partly-cloudy-day":
          icons.set("weather-icon", Skycons.PARTLY_CLOUDY_DAY);
          break;
        case "partly-cloudy-night":
          icons.set("weather-icon", Skycons.PARTLY_CLOUDY_NIGHT);
          break;
        default:
          console.log("Invalid icon");
                      }
  
      icons.play();
      
    });
    
    });
  }
  var flag = 0;
  $("#unit").on("click", function(){
    if(flag === 0){
      $("#temperature").html(Math.round((temperature-32)*5/9));
      $("#unit").html("&#176;C");
      flag = 1;
    }
    else{
      $("#temperature").html(Math.round(temperature));
      $("#unit").html("&#176;F");
      flag = 0;
    }
  });
});  
