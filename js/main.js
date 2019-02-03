// Get year
$('#year').text(new Date().getFullYear());

// Init slick slider for testimonials
$(document).ready(function() {
  $('.slick-testimonials').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  });
});
