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



// Rating 
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let slides = document.querySelectorAll(".slide");
    let index = 0;
    const slideWidth = slides[0].clientWidth; // Get the width of a single slide
    const totalSlides = slides.length;

    // Clone the slides for seamless looping
    slider.innerHTML += slider.innerHTML;

    // Update slides after cloning
    slides = document.querySelectorAll(".slide");

    function showSlide() {
        slider.style.transition = "transform 0.5s ease"; // Apply transition
        slider.style.transform = `translateX(-${index * slideWidth}px)`; // Move to the current slide
    }

    // Show initial slide
    showSlide();

    // Function to move to the next slide
    function nextSlide() {
        index++;
        if (index === totalSlides * 2) {
            index = totalSlides; // If it reaches the last cloned slide, jump back to the first original slide
            setTimeout(() => {
                slider.style.transition = "none";
                slider.style.transform = `translateX(-${index * slideWidth}px)`; // Move to the first original slide without transition
                index = totalSlides; // Reset index to the first original slide
            }, 500); // Adjust timing based on transition duration
        }
        showSlide();
    }

    // Function to move to the previous slide
    function prevSlide() {
        index--;
        if (index < 0) {
            index = totalSlides - 1; // If it reaches the first original slide, jump to the last cloned slide
            setTimeout(() => {
                slider.style.transition = "none";
                slider.style.transform = `translateX(-${index * slideWidth}px)`; // Move to the last cloned slide without transition
                index = totalSlides - 1; // Reset index to the last cloned slide
            }, 500); // Adjust timing based on transition duration
        }
        showSlide();
    }

    // Automatic sliding in a loop
    setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)
});

