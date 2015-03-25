$.ajax({
   url: "http://api.openweathermap.org/data/2.5/weather?q=Louisville,usa",
   dataType: "json",
   success: function(data) {
      
       ##html = '<h2>'+data.city.name+'</h2>';
       ##html += '<p>Minimum temperature: '+data.list[0].temp.night+'</p>';
       ##$('#weather').html(html);
      console.log(data);
      }
 });
