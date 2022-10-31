$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    navSpeed: 2500,
    timeout: 3000,
  });
});

$(window).scroll(function () {
  if (this.scrollY > 20) {
    $(".goTop").fadeIn();
  } else {
    $(".goTop").fadeOut();
  }
})

$(".goTop").click(function () {
  scroll(0, 0)
});

new WOW().init();