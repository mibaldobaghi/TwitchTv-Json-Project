var endpoint = "https://wind-bow.hyperdev.space/twitch-api";
//cretetion's Online Status
$.getJSON(endpoint + "/streams/cretetion?callback=?",function(channel) {
  if(channel["error"] === "Not Found"){
    $("#cretetion div:last-child").html(channel["message"]);
    $("#cretetion").addClass("error");
  }
  if(channel["stream"] == null){
    $("#cretetion div:last-child").html("Offline");
    $("#cretetion").addClass("offline-background");
    $("#cretetion").removeClass("online-background");
  }else{
    $("#cretetion div:last-child").html(channel["stream"]["game"]);
    $("#cretetion").addClass("online-background");
    $("#cretetion").removeClass("offline-background");
  }
})
//cretetion's Details
$.getJSON(endpoint + "/channels/cretetion?callback=?", function(channel) {
  $("#cretetion div:first-child").html("<img src='"+channel["logo"]+"'>");
  $("#cretetion div:nth-child(2)").html("<a href='"+ channel["url"]+ "' target='blank'>" + channel["name"] +"</a>");
})
//brunofin's Online Status
$.getJSON(endpoint + "/streams/brunofin?callback=?", function(channel){
  if(channel["error"] === "Not Found"){
    $("#brunofin div:last-child").html(channel["message"]);
    $("#brunofin").addClass("error");
  }
})
//FCC's Online Status
$.getJSON(endpoint + "/streams/freecodecamp?callback=?", function(channel){
  if(channel["error"] === "Not Found"){
    $("#fcc div:last-child").html(channel["message"]);
    $("#fcc").addClass("error");
  }
  if(channel["stream"] == null){
    $("#fcc div:last-child").html("Offline");
    $("#fcc").addClass("offline-background");
    $("#fcc").removeClass("online-background");
  }else{
    $("#fcc div:last-child").html(channel["stream"]["game"]);
    $("#fcc").addClass("online-background");
    $("#fcc").removeClass("offline-background");
  } 
})
//FCC's Details
$.getJSON(endpoint + "/channels/freecodecamp?callback=?",function(channel){
  $("#fcc div:first-child").html("<img src='"+channel["logo"]+"'>");
  $("#fcc div:nth-child(2)").html("<a href='"+ channel["url"]+ "' target='blank'>" + channel["name"] +"</a>");
})
//ESL-SC2's Online Status
$.getJSON(endpoint + "/streams/ESL_SC2?callback=?", function(channel){
  if(channel["error"] === "Not Found"){
    $("#esl-sc2 div:last-child").html(channel["message"]);
    $("#esl-sc2").addClass("error");
  };
  if(channel["stream"] == null){
    $("#esl-sc2 div:last-child").html("Offline");
    $("#esl-sc2").addClass("offline-background");
    $("#esl-sc2").removeClass("online-background");
  }else{
    $("#esl-sc2 div:last-child").html(channel["stream"]["game"]);
    $("#esl-sc2").addClass("online-background");
    $("#esl-sc2").removeClass("offline-background");
  } 
})
//ESL-SC2's Details
$.getJSON(endpoint + "/channels/ESL_SC2?callback=?", function(channel) {
  $("#esl-sc2 div:first-child").html("<img src='"+channel["logo"]+"'>");
  $("#esl-sc2 div:nth-child(2)").html("<a href='"+ channel["url"]+ "' target='blank'>" + channel["name"] +"</a>");
})
//MightyMouse's Online Status
$.getJSON(endpoint + "/streams/mightymouseufc125?callback=?", function(channel) {
  if(channel["error"] === "Not Found"){
    $("#mightymouse div:last-child").html(channel["message"]);
    $("#mightymouse").addClass("error");
  }
  if(channel["stream"] === null){
    $("#mightymouse div:last-child").html("Offline");
    $("#mightymouse").addClass("offline-background");
    $("#mightymouse").removeClass("online-background");
} else {
    $("#mightymouse div:last-child").html(channel["stream"]["game"]);
  $("#mightymouse").addClass("online-background");
  $("#mightymouse").removeClass("offline-background");
}
})
//MightyMouse's Details
$.getJSON(endpoint + "/channels/mightymouseufc125?callback=?", function(channel) {
  $("#mightymouse div:first-child").html("<img src='"+ channel["logo"] + "' />");
  $("#mightymouse div:nth-child(2)").html("<a href='" + channel["url"] + "' target='blank'>"+ channel["name"] +"</a>");
  
})
//imaqtpie's Online status
$.getJSON(endpoint + "/streams/imaqtpie?callback=?", function(channel) {
  if(channel["error"] === "Not Found"){
    $("#imaqtpie div:last-child").html(channel["message"]);
    $("#imaqtpie").addClass("error");
  }
  if(channel["stream"] === null){
    $("#imaqtpie div:last-child").html("Offline");
    $("#imaqtpie").removeClass("online-background");
    $("#imaqtpie").addClass("offline-background");
  
  }else{
    $("#imaqtpie div:last-child").html(channel["stream"]["game"]);
    $("#imaqtpie").addClass("online-background");
    $("#imaqtpie").removeClass("offline-background");
  }
})
//imaqtpie's Details
$.getJSON(endpoint + "/channels/imaqtpie?callback=?", function(channel) {
  $("#imaqtpie div:first-child").html("<img src='" + channel["logo"] + "' />");
  $("#imaqtpie div:nth-child(2)").html("<a href='" + channel["url"] + "' target='blank'>"+channel["name"] + "</a>");
})
//robotcaleb's Online Status
$.getJSON(endpoint + "/streams/RobotCaleb?callback=?", function (channel) {
  if(channel["error"] === "Not Found"){
    $("#robotcaleb div:last-child").html(channel["message"]);
    $("#robotcaleb").addClass("error");
  }
  if(channel["stream"] === null){
    $("#robotcaleb div:last-child").html("Offline");
    $("#robotcaleb").removeClass("online-background");
    $("#robotcaleb").addClass("offline-background");
  
  }else{
    $("#robotcaleb div:last-child").html(channel["stream"]["game"]);
    $("#robotcaleb").addClass("online-background");
    $("#robotcaleb").removeClass("offline-background");
  }
})
//robotcaleb's Details
$.getJSON(endpoint + "/channels/RobotCaleb?callback=?", function(channel) {
$("#robotcaleb div:first-child").html("<img src='" + channel["logo"] + "' />");
  $("#robotcaleb div:nth-child(2)").html("<a href='" + channel["url"] + "' target='blank'>"+channel["name"] + "</a>");
})

$(document).ready(function() {
  
  $(".filter-on").click(function () {
    $(".offline-background").hide();
    $(".online-background").show();
    $(".error").hide();
  });
  $(".filter-off").click(function () {
    $(".offline-background").show();
    $(".online-background").hide();
    $(".error").hide();
  })
  $(".all").click(function () {
    $(".status").parent().show();
  })
  
})