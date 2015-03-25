$.ajax({
   url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=Louisville&mode=json&units=metric&cnt=7&cnt=5",
   dataType: "json",
   success: function(data) {
       html = '<h2>'+data.list[0].temp.night+'</h2>';
       html += '<ul><li>'+data.city.name+'</li></ul>';
       $('#weather').html(html);
      console.log(data);
      }
 });
