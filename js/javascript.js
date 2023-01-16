// Auto scroll carousel set up, ripped from here:
//   http://cis-linux2.temple.edu:8080/fa16_4350_tue80350/tutorial.html
var autoScrollTimer = 4000;
var scrollSpeed = 2000;
var v;

function autoScroll() {
  v = setInterval(next, autoScrollTimer);
}
function autoScrollQuick() {
  setTimeout(next, 0);
  autoScroll();
}
function stopScroll() {
  clearInterval(v);
  // $('#auto-scroll').carousel({
  //   duration: 0
  // });
}
function next() {
  $('#auto-scroll').carousel('next');
}
function prev() {
  $('#auto-scroll').carousel('prev');
}

// Create timers to transition to the next image every 5 seconds.
// The call to clearInterval(timerVar) when an image is clicked
// or manually scrolled stops the transition.
var romePhotosTimer = setInterval(romeTimer, 5000);
function romeTimer() {
  $('#rome-photos').carousel('next');
}
var engagementPhotosTimer = setInterval(engagementTimer, 5000);
function engagementTimer() {
  $('#engagement-photos').carousel('next');
}
var favPhotosTimer = setInterval(favTimer, 5000);
function favTimer() {
  $('#fav-photos').carousel('next');
}
var gusPhotosTimer = setInterval(gusTimer, 5000);
function gusTimer() {
  $('#lycurgus-photos').carousel('next');
}

$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.parallax').parallax();

  $(document).ready(function(){
    $('.modal').modal();
  });

  //Carousel initiation and timer
  $('#rome-photos').carousel({fullWidth: true});
  $('#engagement-photos').carousel({fullWidth: true, indicators:true});
  $('#lycurgus-photos').carousel({fullWidth: true});
  // Create a timer to transition to the next image every 5 seconds.
  // var timerVar = setInterval(timer, 5000);
  // function timer() {
  //   $('.carousel').carousel('next');
  // }

  $('#auto-scroll').carousel({
    duration: scrollSpeed,
    dist: 0,
    numVisible: 5,
    // indicators: true,
    fullWidth: true,
    padding: 50
  });
  autoScroll();

  $('.carousel-with-nav-buttons').mouseenter(function () {
    stopScroll();
  });
  $('.carousel-with-nav-buttons').mouseleave(function () {
    autoScrollQuick();
  });
  $('#rewind').click(function () {
    prev();
  });
  $('#forward').click(function () {
    next();
  });
});
