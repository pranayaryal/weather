$.ajax({
   url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=Louisville&mode=json&units=metric&cnt=7",
   dataType: "json",
   success: function(data) {
      var $body = $(document.body);
      $body.append(data.list.temp);
      console.log(data.list.temp);
      console.log(data);
      }
 });
