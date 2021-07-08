(function($) {
	$( document ).ready(function() {
		// Preloader
	    if ($(".preloader").length > 0) {
			$(window).load(function() {
				$('.preloader').fadeOut('1000', function () {
					$(this).remove();
				});
			});
		}

	    // ScrollUp
	    $(window).on('scroll', function () {
	      if ($(this).scrollTop() > 200) {
	        $('.scrollingUp').addClass('is-active');
	      } else {
	        $('.scrollingUp').removeClass('is-active');
	      }
	    });
	    $('.scrollingUp').on('click', function () {
	      $("html, body").animate({
	        scrollTop: 0
	      }, 600);
	      return false;
	    });

	    // Sticky Header
	    if ($(".is-sticky-on").length > 0) {
	      $(window).on('scroll', function() {
	        if ($(window).scrollTop() >= 250) {
	            $('.is-sticky-on').addClass('is-sticky-menu');
	        }
	        else {
	            $('.is-sticky-on').removeClass('is-sticky-menu');
	        }
	      });
	    }

	    // Breadcrumb Sticky Menu
	    if ($(".breadcrumb-sticky-on").length > 0) {
	      $(window).on('scroll', function() {
	        if ($(window).scrollTop() >= 420) {
	            $('.breadcrumb-sticky-on').addClass('breadcrumb-sticky-menu');
	        }
	        else {
	            $('.breadcrumb-sticky-on').removeClass('breadcrumb-sticky-menu');
	        }
	      });
	    }

	    // Footer Above Carousel
	    if ($(".footer-above-carousel").length > 0) {
	      var owlFooterAbove = $(".footer-above-carousel");
	      owlFooterAbove.owlCarousel({
	          rtl: $("html").attr("dir") == 'rtl' ? true : false,
	          loop: true,
	          dots: false,
	          nav: false,
	          stagePadding: 0,
	          mouseDrag: true,
	          touchDrag: true,
	          autoplay: true,
	          responsiveClass:true,
	          responsive: {
	              0: {
	                  margin: 15,
	                  items: 1
	              },
	              501: {
	                  margin: 12,
	                  items: 2
	              },
	              992: {
	                  margin: 15,
	                  items: 2
	              }
	          }
	      });
	    }

	    // Service Section Load Button Filter
	    $(".service-page .st-load-item").slice(0, 6).show();
	    $(".service-page .st-load-btn").on('click', function (e) {
	        e.preventDefault();
	        $(".service-page .st-load-btn").addClass("loadspinner");
	        $(".service-page .st-load-btn").animate({
	                display: "block"
	            }, 2500,
	            function () {
	                // Animation complete.                
	                // $(".load-2:hidden").slice(0, 2).slideDown()
	                // .each(function() {
	                //   $('#grid').shuffle('appended', $(this));
	                // });
	                $(".service-page .st-load-item:hidden").slice(0, 3).slideDown();
	                if ($(".service-page .st-load-item:hidden").length === 0) {
	                    $(".service-page .st-load-btn").text("No more");
	                }
	                $(".service-page .st-load-btn").removeClass("loadspinner");
	            }
	        );
	    });

	    //Projects Section Load Button Filter
	    $("#projects-section .st-load-item").slice(0, 6).show();
	    $("#projects-section .st-load-btn").on('click', function (e) {
	        e.preventDefault();
	        $("#projects-section .st-load-btn").addClass("loadspinner");
	        $("#projects-section .st-load-btn").animate({
	                display: "block"
	            }, 2500,
	            function () {
	                $("#projects-section .st-load-item:hidden").slice(0, 3).slideDown();
	                if ($("#projects-section .st-load-item:hidden").length === 0) {
	                    $("#projects-section .st-load-btn").text("No more");
	                }
	                $("#projects-section .st-load-btn").removeClass("loadspinner");
	            }
	        );
	    });

	    // MagnificPopup
	    $('.mgf-popup').magnificPopup({
	      delegate: 'a',
	      type: 'image',
	      gallery: {
	        enabled: true,
	        navigateByImgClick: true,
	        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	      },
	      callbacks: {
	        elementParse: function(item) {
	          //console.log(item.el[0].className);
	          if(item.el[0].className == 'video') {
	            item.type = 'iframe',
	            item.iframe = {
	               patterns: {
	                 youtube: {
	                   index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

	                   id: 'v=', // String that splits URL in a two parts, second part should be %id%
	                    // Or null - full URL will be returned
	                    // Or a function that should return %id%, for example:
	                    // id: function(url) { return 'parsed id'; } 

	                   src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
	                 },
	                 vimeo: {
	                   index: 'vimeo.com/',
	                   id: '/',
	                   src: '//player.vimeo.com/video/%id%?autoplay=1'
	                 },
	                 gmaps: {
	                   index: '//maps.google.',
	                   src: '%id%&output=embed'
	                 }
	               }
	            }
	          } else {
	             item.type = 'image',
	             item.tLoading = 'Loading image #%curr%...',
	             item.mainClass = 'mfp-img-mobile',
	             item.image = {
	               tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
	             }
	          }

	        }
	      }
	    });

	    // Single Magnific Popup Video
	    $('.btn-play').magnificPopup({
	        type: 'iframe'
	    });

	    // Counter Up
	    $('.counter').counterUp({
	        delay: 10,
	        time: 1000
	    });

	    // Skill Counter
	    $('.skillbar').each(function(){
	      $(this).find('.skillbar-bar').animate({
	        width:$(this).attr('data-percent')
	      },6000);
	    });
	    $('.count-bar').each(function () {
	      var $this = $(this);
	      $({ Counter: 0 }).animate({ Counter: $this.text() }, {
	        duration: 6000,
	        easing: 'swing',
	        step: function () {
	          $this.text(Math.ceil(this.Counter));
	        }
	      });
	    });

	    // Tab Filter
	    var postFilter = $('.st-filter-init');
	    $.each(postFilter,function (index,value) {
	        var el = $(this);
	        var parentClass = $(this).parent().attr('class');
	        var $selector = $('#'+el.attr('id'));
	        $($selector).imagesLoaded(function () {
	            var festivarMasonry = $($selector).isotope({
	                itemSelector: '.st-filter-item',
	                percentPosition: true,
	                masonry: {
	                    columnWidth: 0,
	                    gutter:0
	                }
	            });
	            $(document).on('click', '.'+parentClass+' .st-tab-filter a', function () {
	                var filterValue = $(this).attr('data-filter');
	                festivarMasonry.isotope({
	                    filter: filterValue
	                });
	            });
	        });
	    });
	    $(document).on('click', '.st-tab-filter a', function () {
	      $(this).siblings().removeClass('active');
	      $(this).addClass('active');
	    });

	    // Tab Swipe Indicator
	    if ($('.tab-swipe').length > 0) {
	        $('.tab-swipe').append('<li class="indicator"></li>');
	        if ($('.tab-swipe li a').hasClass('active')) {
	            let cLeft = $('.tab-swipe li a.active').position().left + 'px',
	                cWidth = $('.tab-swipe li a.active').css('width');
	            $('.indicator').css({
	                left: cLeft,
	                width: cWidth
	            })
	        }
	        $('.tab-swipe li a').on('click', function () {
	            $('.tab-swipe li a').removeClass('is-active');
	            $(this).addClass('is-active');
	            let cLeft = $('.tab-swipe li a.is-active').position().left + 'px',
	                cWidth = $('.tab-swipe li a.is-active').css('width');
	            $('.indicator').css({
	                left: cLeft,
	                width: cWidth
	            })
	        });
	    }
	    if ($('.tab-swipe-filter').length > 0) {
	        $('.tab-swipe-filter').append('<span class="indicator"></span>');
	        if ($('.tab-swipe-filter a').hasClass('active')) {
	            let cLeft = $('.tab-swipe-filter a.active').position().left + 'px',
	                cWidth = $('.tab-swipe-filter a.active').css('width');
	            $('.indicator').css({
	                left: cLeft,
	                width: cWidth
	            })
	        }
	        $('.tab-swipe-filter a').on('click', function () {
	            $('.tab-swipe-filter a').removeClass('is-active');
	            $(this).addClass('is-active');
	            let cLeft = $('.tab-swipe-filter a.is-active').position().left + 'px',
	                cWidth = $('.tab-swipe-filter a.is-active').css('width');
	            $('.indicator').css({
	                left: cLeft,
	                width: cWidth
	            })
	        });
	    }

	    // Animated Typing Text
	    var typingText = function (el, toRotate, period) {
	      this.toRotate = toRotate;
	      this.el = el;
	      this.loopNum = 0;
	      this.period = parseInt(period, 10) || 2000;
	      this.txt = "";
	      this.tick();
	      this.isDeleting = false;
	    };
	    typingText.prototype.tick = function () {
	      var i = this.loopNum % this.toRotate.length;
	      var fullTxt = this.toRotate[i];

	      if (this.isDeleting) {
	        this.txt = fullTxt.substring(0, this.txt.length - 1);
	      } else {
	        this.txt = fullTxt.substring(0, this.txt.length + 1);
	      }

	      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

	      var that = this;
	      var delta = 200 - Math.random() * 100;

	      if (this.isDeleting) {
	        delta /= 2;
	      }

	      if (!this.isDeleting && this.txt === fullTxt) {
	        delta = this.period;
	        this.isDeleting = true;
	      } else if (this.isDeleting && this.txt === "") {
	        this.isDeleting = false;
	        this.loopNum++;
	        delta = 500;
	      }

	      setTimeout(function () {
	        that.tick();
	      }, delta);
	    };
	    window.onload = function () {
	      var elements = document.getElementsByClassName("typewrite");
	      for (var i = 0; i < elements.length; i++) {
	        var toRotate = elements[i].getAttribute("data-type");
	        var period = elements[i].getAttribute("data-period");
	        if (toRotate) {
	          new typingText(elements[i], JSON.parse(toRotate), period);
	        }
	      }
	      // INJECT CSS
	      var css = document.createElement("style");
	      css.type = "text/css";
	      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #111111}";
	      document.body.appendChild(css);
	    };
		
	    // countdown active code
	    $('[data-countdown]').each(function () {
	        var $this = $(this),
	            finalDate = $(this).data('countdown');
	        $this.countdown(finalDate, function (event) {
	            $(this).find(".days").html(event.strftime("%D"));
	            $(this).find(".hours").html(event.strftime("%H"));
	            $(this).find(".minutes").html(event.strftime("%M"));
	            $(this).find(".seconds").html(event.strftime("%S"));
	        });
	    });
	});
}(jQuery));