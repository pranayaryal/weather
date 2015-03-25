$.ajax({
   url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=Louisville&mode=json&units=metric&cnt=7&cnt=5",
   dataType: "json",
   success: function(data) {
      var $body = $(document.body);
      $body.append(data.list[0].temp.night);
      console.log(data.list[0].temp.night);
      console.log(data);
      }
 });
