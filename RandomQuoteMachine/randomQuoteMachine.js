function getQuote(){
  var time = new Date();
    $.getJSON(
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + time,
      function(a) {
        $(".quote-box").html(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
        $("#tweet-button").attr('href','https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent( a[0].content.replace(/(<p>|<\/p>|\n)/g, "") + '--- ' + a[0].title));
      });
}

$(document).ready(function(){
  getQuote();
  $("#generateQuote").on("click", getQuote);
});
