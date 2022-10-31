$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    navSpeed: 1500,
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