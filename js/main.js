//Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

/* Sidebar menu*/
// close hamburger menu after click a
$(".menu-list li a").on("click", function () {
  $("#hamburger-menu").click();
});

/* When your mouse cursor enter the background, the fading won't pause and keep playing */
$(".carousel").carousel({
  pause:
    "false" /* Change to true to make it paused when your mouse cursor enter the background */,
});

// Work
$(document).ready(function () {
  // init Isotope
  var $grid = $("#gallery-content-center").isotope({
    // options
  });
  // filter items on button click
  $(".gallery-header-center-right-links").on("click", function () {
    $(".gallery-header-center-right-links").removeClass(
      "gallery-header-center-right-links-current"
    );
    $(this).addClass("gallery-header-center-right-links-current");

    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
});

// Testimonials
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [990, 1],
    itemsTablet: [768, 1],
    itemsMobile: [650, 1],
    pagination: true,
    navigation: false,
    autoPlay: true,
  });
});
