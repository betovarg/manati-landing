$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: true,
    controlNav: false,
    touch: true,
    pauseOnHover: true,
  });

  $('.flexslider-clients').flexslider({
    animation: "fade",
    directionNav: false,
    controlNav: false,
  });

});