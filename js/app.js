$.ajax({
   url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=Louisville&mode=json&units=metric&cnt=7",
   dataType: "json",
   success: function(data) {
      $(document.body).append(data);
      console.log(data);
      }
 });