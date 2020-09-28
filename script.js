$(document).ready(function() {
  $("#search-button").on("click", function() {
    var formSearch = $("#search-value").val();
    $("#search-value").val("");

    searchWeather(formSearch);
  });

  $(".history").on("click", "li", function() {
    searchWeather($(this).text());
 


  });
  function addCity(text) {
    var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    $(".history").append(li);
  }

  function searchWeather(s) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + formSearch + "&appid=25e06f9ff8307c93ac15e24fa0a3c459&units=imperial",
      dataType: "json",
      success: function(data) {
        // create history link for this search
        if (history.indexOf(formSearch) === -1) {
          history.push(formSearch);
          window.localStorage.setItem("history", JSON.stringify(history));
    
          addCity(formSearch);
        }
        $("#today").empty(); 










        
      }
})}
















})