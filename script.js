function forecast5day(formSearch) {
  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/forecast?q=" + formSearch + "&appid=25e06f9ff8307c93ac15e24fa0a3c459&units=imperial",
    dataType: "json",
    success: function(response) {
      for(var i = 0; i < response.list.length; i++) {
        if (response.list[i].dt_txt.indexOf("15:00:00") !== -1) {
          // console.log(new Date(response.list[i].dt_txt).toLocaleDateString())
           var title = (response.list[i].dt_txt.indexOf("15:00:00"))
          
         $(".dayHeadline").text(title[0]);
        
        // $(".5dayheadline").text(new Date(response.list[i].dt_txt).toLocaleDateString())

            // console.log(new Date(response.list[i].dt_txt).toLocaleDateString())
            

        
      

  }
      
}   
  
  }}
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
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + formSearch + "&appid=25e06f9ff8307c93ac15e24fa0a3c459&units=imperial",
      dataType: "json",
      success: function(response) {
     forecast5day(formSearch);    
 addCity(formSearch);
 $(".card-title").text(response.name + " (" + new Date().toLocaleDateString() + ")");
 $("#wind").text("Wind " + response.wind.speed + "MPH");
 $("#temperature").text("Temperature " + response.main.temp + "F");
 $("#humidity").text("Humidity " + response.main.humidity + "%")
 var iconcode = response.weather[0].icon;
 var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"
 $('#img').attr('src', iconurl);
      }
      

});




}
















})