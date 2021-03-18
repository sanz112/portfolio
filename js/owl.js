$(document).ready(function() {

$('.hero-bg-slider').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 3500,
    lazyLoad: true,
  });

  // 9. hero slider one
  $('.hero-slider-one').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 1000,
    animateOut: "slideOutLeft",
    animateIn: "slideInRight",
  });
  // 10. hero slider two
  $('.hero-content-slider').owlCarousel({
    loop: false,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 1000,
    animateOut: "slideOutLeft",
    animateIn: "slideInRight",
  });

  $('.custom-indicator-slider').owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    animateOut: "slideOutUp",
    animateIn: "slideInDown",
    dotsContainer: '#carousel-custom-indicator',
  });

  // 8. client-testimonial one item carousel
  $('.client-testimonial-1').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    items: 1,
  });

  $('.client-testimonial').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  // 9. hero content one item carousel
  $('.hero-content-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    items: 1,
  });

  // 10. our clients logo carousel
  $('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items: 5
      },
      1200: {
        items: 6
      }

    }
  });
  $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    alert('hello');
  })
});