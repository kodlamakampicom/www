jQuery(function($) {
	// Testimonial Slider
    if ($(".testimonials-slider").length > 0) {
      var owlTestimonial = $(".testimonials-slider");
      owlTestimonial.owlCarousel({
          rtl: $("html").attr("dir") == 'rtl' ? true : false,
          loop: true,
          dots: false,
          nav: false,
          margin: 30,
          mouseDrag: true,
          touchDrag: true,
          autoplay: true,
          autoplayTimeout: 12000,
          responsive: {
              0: {
                  stagePadding: 10,
                  center: true,
                  items: 1
              },
              768: {
                  stagePadding: 10,
                  center: false,
                  items: 2
              },
              992: {
                  stagePadding: 15,
                  center: true,
                  items: testimonial_settings.items,
              }
          }
      });
    }
});