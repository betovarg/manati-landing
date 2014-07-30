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
/*
Scroll Anclas
*/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
})
