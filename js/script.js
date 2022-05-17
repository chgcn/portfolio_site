$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".navbar .logo a img").addClass("sticky");
      $(".navbar .menu li a").addClass("sticky");
      $(".menu-btn i").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
      $(".navbar .logo a img").removeClass("sticky");
      $(".navbar .menu li a").removeClass("sticky");
      $(".menu-btn i").removeClass("sticky");
    }
  });
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // toggle about more button script and button text
  $(".more-btn-about").click(function () {
    $(".more").toggleClass("active");
    $(this).text(function (i, text) {
      return text === "更多" ? "更少" : "更多";
    });
  });
});
// typing animation script

let typed = new Typed(".typing", {
  strings: ["程序员", "教师", "研究生", "音乐人", "译者"],
  typeSpeed: 300,
  backSpeed: 100,
  loop: true,
});

let aboutTyped = new Typed(".aboutTyping", {
  strings: ["programmer", "teacher", "researcher", "musician", "translator"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

var slider = tns({
  container: ".my-slider",
  items: 3,
  loop: true,
  // gutter: 10,
  swipeAngle: false,
  // autoplay: true,
  // autoplayHoverPause: true,
  // autoplayTimeout: 3000,
  controls: false,
  // mode: "gallery",
  nav: true,
  mouseDrag: true,
  // fixedWidth: 500,
  // "autoWidth": true,
  // slideBy: "page",
  // center: true,
  navPosition: "bottom",
  responsive: {
    0: {
      items: 1,
      // nav: false
    },
    600: {
      items: 2,

      // nav: false
    },
    1000: {
      items: 3,

      // gutter: 30
      // nav: false
    },
  },
});
