@@include("_libs.min.js");
@@include("_bundle.js");
@@include("_test.js");
@@include("_canvas.js");
// @@include("_script.js");

$(function () {
  $(".slider").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    accessibility: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
    centerPadding: "50px",
    speed: 5000,
    easing: "cubic-bezier(.37,-0.58,.84,1.04)",
  });
});
