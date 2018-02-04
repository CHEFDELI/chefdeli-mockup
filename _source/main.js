$(function(){
  $(".more").click(function(){
    $(".menu").toggleClass("visible");
  });
  
  $(".logged-in").text("logout")
  $(".logged-out").text("login")
});