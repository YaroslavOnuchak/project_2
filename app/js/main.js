@@include("_libs.min.js");
// @@include("_bundle.js");
@@include("_test.js");
@@include("_canvas.js");
@@include("_script.js");
@@include("_paralax_bg.js");
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
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    // easing: "cubic-bezier(.37,-0.58,.84,1.04)",
  });
});
let getSel = (el) => document.querySelector(el);

getSel("#nav-burger-btn").addEventListener("click", function () {
  if (this.checked) {
    getSel(".list-contacts").style.left = `0`;
  } else {
    getSel(".list-contacts").style.left = `-110%`;
  }
});

const bigBall = document.querySelector(".cursor__ball--big");
const smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  hoverables[i].addEventListener("mouseenter", onMouseHover);
  hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to(bigBall, 0.4, {
    x: e.clientX - 15,
    y: e.clientY - 15,
  });
  TweenMax.to(smallBall, 0.1, {
    x: e.clientX - 5,
    y: e.clientY - 7,
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to(bigBall, 0.3, {
    scale: 4,
  });
}
function onMouseHoverOut() {
  TweenMax.to(bigBall, 0.3, {
    scale: 1,
  });
}
