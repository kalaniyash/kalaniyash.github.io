

        // document.getElementById('contactForm').addEventListener('submit', function(event) {
        //     event.preventDefault(); // Prevent the form from submitting the traditional way

        //     // Show thank you message
        //     document.getElementById('sendmessage').style.display = 'block';

        //     // Clear form fields
        //     this.reset();
            
        //     // Optionally hide error message if any
        //     document.getElementById('errormessage').style.display = 'none';
        // });
    


		
		document.getElementById('contactForm').addEventListener('submit', function(event) {
			event.preventDefault(); // Prevent the default form submission
		
			// Get form elements
			const name = document.getElementById('name').value.trim();
			const email = document.getElementById('email').value.trim();
			const phone = document.getElementById('phone').value.trim();
			const subject = document.getElementById('subject').value.trim();
			const message = document.querySelector('textarea[name="message"]').value.trim();
		
			// Validation flags
			let valid = true;
		
			// Validate each field
			if (name.length < 4) {
				showValidationMessage('name', 'Please enter at least 4 characters.');
				valid = false;
			} else {
				hideValidationMessage('name');
			}
		
			if (!validateEmail(email)) {
				showValidationMessage('email', 'Please enter a valid email address.');
				valid = false;
			} else {
				hideValidationMessage('email');
			}
		
			if (phone.length < 10) {
				showValidationMessage('phone', 'Please enter a valid phone number.');
				valid = false;
			} else {
				hideValidationMessage('phone');
			}
		
			if (subject.length < 8) {
				showValidationMessage('subject', 'Please enter at least 8 characters.');
				valid = false;
			} else {
				hideValidationMessage('subject');
			}
		
			if (message.length === 0) {
				showValidationMessage('message', 'Please enter a message.');
				valid = false;
			} else {
				hideValidationMessage('message');
			}
		
			if (valid) {
				// If all fields are valid, show the success message
				document.getElementById('sendmessage').style.display = 'block';
				document.getElementById('errormessage').style.display = 'none';
		
				// Clear form fields
				document.getElementById('contactForm').reset();
		
				// Show popup
				alert('Form submitted successfully!');
			} else {
				// If some fields are not valid, show the error message
				
			}
		});
		
		function showValidationMessage(fieldId, message) {
			const validationMessage = document.querySelector(`#${fieldId} ~ .validation`);
			if (validationMessage) {
				validationMessage.textContent = message;
				validationMessage.style.display = 'block';
			}
		}
		
		function hideValidationMessage(fieldId) {
			const validationMessage = document.querySelector(`#${fieldId} ~ .validation`);
			if (validationMessage) {
				validationMessage.style.display = 'none';
			}
		}
		
		function validateEmail(email) {
			const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
			return re.test(email);
		}
		







(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
$(window).on('scroll', function () {
    var pixels = 50; 
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
        $('.navbar-expand-md').addClass('navbar-reduce');
    } else {
        $('.navbar-expand-md').addClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
        $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
        $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
});

// Add this code to handle the hamburger menu click event
$('.navbar-toggler').on('click', function () {
    $(this).toggleClass('red-color');
});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);
