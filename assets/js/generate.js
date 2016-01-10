(function($, e, p) {

  // Variables & Functions
  $ = function(e) {
    return document.querySelector(e);
  };
  e = $("#output h1");

  // New Ideas
  newIdea = function(l) {

    // Variables
    l = ["Congratulations card","Filters","Subscribe","Mac OS X 1.0","Special offer","Clock","File upload","Compose email","Map","Data visualization","Advanced search","Feedback form","Technical specifications","Dial screen","Coupon","Tournament","City card","Log in","Dashboard","Calendar","Share dropdown","Todo list","Search results","Weight tracker","Activity feed","Boarding pass","Price Table","Notifications","Confirmation pop-up","Sign up","TV app","Leaderboard","Countdown","Book shelf","Movie review","Product card","Comments section","Budget slider","City page","Admin interface","Dropdown","Mobile menu","Settings","Cinema app","Account settings","Volume control","Credit card","Toggle button","Portfolio","404 page","Remote control","Featured section","Search input","Animated icon","Twitter profile","Location tracker","Photo editor","Smart home UI","Quote","Social Share","Chat","Product list","Team page","Reminder","Playlist","Blog post","Onboarding","Landing page","Music player","Profile card","File download","Windows explorer","TV interface","Event card","Favorites","Recipe","Wallet","Styleguide","Thermostat","Shopping card","Fitness app","Pop-up","Confirm reservation","Collage maker","Material Design","Text editor","Checkout","Jobs list","Keyboard","Add to cart","Analytic chart","Video player","Timeline","Speedometer","Crowdfunding campaign","Breadcrumbs","Related posts","Camera","Fitness card","Undo button","Grid builder","Activity control","Calculator","Match result","Color picker","Contacts list","Car interface","About us","Contact us","Coming soon","Event page","Splash screen","Web editor","Sport match","Currency status","Weather forecast","App store","Airdrop","Checkbox","Website traffic","Slider","Alarm","Icon","Article card","Language selector","Emoji keyboard","Testimonials","Food menu","Floating action button","Navigation menu"];


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
