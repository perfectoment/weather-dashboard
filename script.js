
function forecast5day(formSearch) {
  $.ajax({
    type: "GET",
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + formSearch + "&appid=25e06f9ff8307c93ac15e24fa0a3c459&units=imperial",
    dataType: "json",
    success: function(response) {
      for(var i = 0; i < 40; i=i+8) {
        var cardBody = $("<div>");
        var data = response.list[i];
        var currentDate = $("<p>").text(data.dt_txt.substring(0, 10))
        var temperature5day = $("<p>").text("Temperature: " + data.main.temp);
        var humidity5day = $("<p>").text("Humidity: " + data.main.humidity);
        var iconcode = data.weather[0].icon;
        var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png"
        var imageTag = $("<img>");
        imageTag.attr("src", iconurl);
        var day5 = $("#5day");
        cardBody.attr("card", "card card-body border border-secondary")
        cardBody.append(imageTag, currentDate, temperature5day, humidity5day);
        day5.append(cardBody);

            
    
      
}   }
  
  }
  )}
$(document).ready(function() {
  
  $("#searchBtn").on("click", function() {
    var formSearch = $("#searchForm").val();
    $("#searchForm").val("");
    weatherMap(formSearch);
  });
  $(".city-list").on("click", "li", function() {
    weatherMap($(".city-list").text());
  });
  function addCity(text) {
    var list = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    $(".city-list").append(list);
  }
  function weatherMap(formSearch) {
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + formSearch + "&appid=25e06f9ff8307c93ac15e24fa0a3c459&units=imperial",
      dataType: "json",
      success: function(response) {
     forecast5day(formSearch);  
     console.log(response);  
 addCity(formSearch);
 $(".card-title").text(response.name + " (" + new Date().toLocaleDateString() + ")");
 $("#wind").text("Wind " + response.wind.speed + "MPH");
 $("#temperature").text("Temperature " + response.main.temp + "F");
 $("#humidity").text("Humidity " + response.main.humidity + "%")
 var iconcode = response.weather[0].icon;
 var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png"
 $('#img').attr('src', iconurl);
      
      
      } 

});




}
















})