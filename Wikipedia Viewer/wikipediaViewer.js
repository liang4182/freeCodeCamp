$(document).ready(function(){
  //Texts waiting for "enter" button pressed
  $(".search-box").on("keyup",function(press){
    //detect if the "enter" key has been pressed
    if(press.keyCode == 13){
      press.preventDefault();
      
      //Use the wikipedia API
      var title = $(".search-box").val();
      //English wikipedia
      var endpoint = "https://en.wikipedia.org/w/api.php?";
      // The parameters of a query can refer to https://www.mediawiki.org/wiki/API:Query
      // IMPORTANCE: the parameter "exintro" reduces the size of retrieved content, making "extracts" applicable to multiple pages
      var parameters = "action=query&format=json&prop=extracts|info&explaintext&exsentences=1&exintro&exlimit=max&inprop=url&&generator=search&gsrsearch=";
      var crossOriginURL = "https://cors-anywhere.herokuapp.com/";
      
      //Get the search results in JSON
      //Refer to the API Main page: https://www.mediawiki.org/wiki/API:Main_page#A_simple_example
      $.ajax({
        url: crossOriginURL + endpoint + parameters + encodeURIComponent(title),
        dataType: "json",
        type: "POST",
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data){
          var html = "";
          for (var val in data.query.pages){
            html += "<h2><a href=" + data.query.pages[val].fullurl + " target='_blank'>"
            html += data.query.pages[val].title + "</a></h2>";
            html += "<p>" + data.query.pages[val].extract + "</p>";
          }
          
          $(".search-results").html(html);         
          
        }
      });
      
    }
  });
});
