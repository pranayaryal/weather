$.ajax({
   url: "http://weather.yahooapis.com/forecastjson?w=2295424",
   dataType: "json",
   success: function(data) {
      $(document.body).append(data);
      }
 });