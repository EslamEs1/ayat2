(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.owl-banner').owlCarousel({
		items:1,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:0,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			  },
			  1600:{
				  items:1
			  }
		  }
	})

    $('.owl-services').owlCarousel({
        items:4,
        loop:true,
        dots: true,
        nav: false,
        autoplay: true,
        margin:5,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              },
              1600:{
                  items:4
              }
          }
    })

    
    $(".owl-slider").owlCarousel({
        items: 4,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        margin: 5,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1600: {
                items: 4,
            },
        },
    });


    $('.owl-portfolio').owlCarousel({
        items:4,
        loop:true,
        dots: true,
        nav: true,
        autoplay: true,
        margin:30,
          responsive:{
              0:{
                  items:1
              },
              700:{
                  items:2
              },
              1000:{
                  items:3
              },
              1600:{
                  items:4
              }
          }
    })

    

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }



	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);



// pricing 
function changePackage(packageType) {
    // Hide all package items
    var items = document.querySelectorAll(".package");
    items.forEach(function (item) {
        item.style.display = "none";
    });

    // Show the selected package items
    var selectedItems = document.querySelectorAll(".item-" + packageType);
    selectedItems.forEach(function (item) {
        item.style.display = "block";
    });
}

// By default, show the 30 minutes package items
document.addEventListener("DOMContentLoaded", function () {
    changePackage("30");
});


// Testimonials;
$(".owl-testimonials").owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    items: 1,
    nav: true,
    responsive: {
        0: {
            items: 1,
            stagePadding: 60,
        },
        600: {
            items: 1,
            stagePadding: 100,
        },
        1000: {
            items: 1,
            stagePadding: 200,
        },
        1200: {
            items: 1,
            stagePadding: 250,
        },
        1400: {
            items: 1,
            stagePadding: 300,
        },
        1600: {
            items: 1,
            stagePadding: 350,
        },
        1800: {
            items: 1,
            stagePadding: 400,
        },
    },
});

var playerSettings = {
    controls: ["play-large"],
    fullscreen: { enabled: false },
    resetOnEnd: true,
    hideControls: true,
    clickToPlay: true,
    keyboard: false,
};

const players = Plyr.setup(".js-player", playerSettings);

players.forEach(function (instance, index) {
    instance.on("play", function () {
        players.forEach(function (instance1, index1) {
            if (instance != instance1) {
                instance1.pause();
            }
        });
    });
});

$(".video-section").on("translated.owl.carousel", function (event) {
    players.forEach(function (instance, index1) {
        instance.pause();
    });
});