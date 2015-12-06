var newIdea = function(l, n, o, t, s) {

  // Variables
  l = ["Navigation menu", "Product Card", "Checkout", "Sing in", "Log in", "Calculator", "Calendar", "Weight Tracker", "Drop Down", "Profile card", "Countdown", "Music Player", "Timeline", "Notification", "Keyboard", "Share", "Account settings", "Pricing table", "Event card", "Subscribe notification", "Map", "Contact Form", "Boarding Pass", "Video player", "Slider", "Product costumization", "Language switcher", "Reminder", "Clock", "Form validation", "Product Review", "Movie Review", "Related posts", "Emoji keyboard", "Tweet button", "Settings", "Banner", "Testimonial"];
  n = Math.floor(Math.random() * l.length);
  o = l[n];
  t = 300;
  e = $("#output h1");

  // For the first time
  if (e.hasClass("pre")) {
    setTimeout(function(){
      e.removeClass("pre");
      e.addClass("aft");
    }, t);
  }

  // Every time
  e.addClass("hidden");
  setTimeout(function(){
    e.html(o);
    e.removeClass("hidden");
  }, t);
};

$(window).keyup(function(e) {
  if (e.keyCode === 0 || e.keyCode === 32) newIdea();
}).click(newIdea);
