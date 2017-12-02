$(document).ready(function(){

var button = document.getElementsByClassName("btn");
var before = document.getElementById('before');
var after = document.getElementById('after');
  $("#after").hide();
  $("#button").click(function(){
  $("#before").hide();
  $("#after").show();
});
});