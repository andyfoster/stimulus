(function($, e, p) {

  // Variables & Functions
  $ = function(e) {
    return document.querySelector(e);
  };
  e = $("#output h1");

  // New Ideas
  newIdea = function(l) {

    // Variables
    l = ["Navigation menu","Product Card","Checkout","Sing in","Log in","Calculator","Calendar","Weight Tracker","Drop Down","Profile card","Countdown","Music Player","Timeline","Notification","Keyboard","Share","Account settings","Pricing table","Event card","Subscribe notification","Map","Contact Form","Boarding Pass","Video player","Slider","Product costumization","Language switcher","Reminder","Clock","Form validation","Product Review","Movie Review","Related posts","Emoji keyboard","Tweet button","Settings","Banner","Testimonial"];


    // Generate new content
    e.className += " hidden";
    setTimeout(function() {
      e.innerHTML = l[Math.floor(Math.random() * l.length)];
      e.className = "aft xxl";
    }, 300);

  };

  // "Tap" for Touchscreens
  if ("ontouchstart" in window) {
    $("html").onclick = function() {
      newIdea();
    };
    p = "touch";
  };

  // "Spacebar" for keyboards
  $("body").onkeyup = function(e) {
    if (e.keyCode == 0 || e.keyCode == 32) newIdea();
  };

  // In the placeholder, it descrives
  // the action you have to do
  if (p == "touch") {
    e.innerHTML = "Tap anywhere";
  } else {
    e.innerHTML = "Press Spacebar";
  };

})();
