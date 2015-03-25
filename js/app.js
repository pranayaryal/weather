$.ajax({
   url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=Louisville&mode=json&units=metric&cnt=7&cnt",
   dataType: "json",
   success: function(data) {
      var $body = $(document.body);
      $body.append(data);
      console.log(data);
      console.log(data);
      }
 });
