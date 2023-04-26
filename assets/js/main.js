jQuery(function($){

	"use strict"; 

	/*----------------------/
	/* MAIN NAVIGATION
	/*---------------------*/
		
	$(window).on('scroll', function(){
		if( $(window).width() > 1024 ) {
			if( $(document).scrollTop() > 150 ) {
				setNavbarLight();
			}else {
				setNavbarTransparent();
			}
		}
	});	
	
	function toggleNavbar() {
		if(($(window).width() > 1024) && ($(document).scrollTop() <= 150)) {
			setNavbarTransparent();
		} else {
			setNavbarLight();
		}
	}

	toggleNavbar();

	$(window).on('resize', function() {
		toggleNavbar();	
	});

	/* Navbar Setting */
	function setNavbarLight() {
		$('.navbar').addClass('navbar-light');
	}

	function setNavbarTransparent() {
		$('.navbar').removeClass('navbar-light');
	}

	// Hide Collapsible Menu
	$('.navbar-nav li a').on('click', function() {
		if($(this).parents('.navbar-collapse.collapse').hasClass('in')) {
			$('#main-nav').collapse('hide');
		}		
	});

	$('body').localScroll({
		duration: 2000,
		easing: 'easeInOutExpo'
	});

	var wow = new WOW();

	wow.init();
			
	$("#owl-clients").owlCarousel({
	
		slideSpeed : 500,
		paginationSpeed : 1000,
		singleItem: false,
		items: 4,
		
		//Autoplay
		autoPlay : 3000,
		stopOnHover : false

	});

	$("#owl-testimonials").owlCarousel({
	
		slideSpeed : 1000,
		paginationSpeed : 2000,
		singleItem: true,
		items: 1,
		
		//Autoplay
		autoPlay : 5000,
		stopOnHover : false

	});
	
	/*----------------------/
	/* MAIN TOP SUPERSIZED
	/*---------------------*/

	if( $('.main-top').length > 0 ) {
		$.supersized({
				
			// Functionality		
			autoplay: 1,				// Slideshow starts playing automatically
			slide_interval: 2000,		// Length between transitions
			transition: 1, 				// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
			transition_speed: 1000,		// Speed of transition				
													   										   
			// Components							
			slide_links: 'blank',		// Individual links for each slide (Options: false, 'num', 'name', 'blank')
			thumb_links: 0,				// Individual thumb links for each slide
			slides:  	[				// Slideshow Images
							{image : 'assets/img/slider1.jpg', title : '', thumb : '', url : ''},
							{image : 'assets/img/slider2.jpg', title : '', thumb : '', url : ''},
							{image : 'assets/img/slider3.jpg', title : '', thumb : '', url : ''}  
						],
		});

	}
	
	/*----------------------/
	/* WORKS
	/*---------------------*/

	var originalTitle, currentItem;

	$('.media-popup').magnificPopup({
		type: 'image',
		callbacks: {
			beforeOpen: function() {

				// modify item title to include description
				currentItem = $(this.items)[this.index];
				originalTitle = currentItem.title;
				currentItem.title = '<h3>' + originalTitle + '</h3>' + '<p>' + $(currentItem).parents('.work-item').find('img').attr('alt') + '</p>';

				// adding animation				
				this.st.mainClass = 'mfp-fade'; 
			},
			close: function() {
				currentItem.title = originalTitle; 
			}
		}
		
	});

	/*----------------------/
	/* SCROLL TO TOP
	/*---------------------*/

	if( $(window).width() > 992 ) {
		$(window).scroll( function() {
			if( $(this).scrollTop() > 300 ) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').on('click', function(e) {
			e.preventDefault();

			$('body, html').animate({
				scrollTop: 0
			}, 1500, 'easeInOutExpo');
		});	
	}

	if (!navigator.userAgent.match("Opera/") ) {
		$('body').scrollspy({
			target: '#main-nav'
		});
	}else {
		$('#main-nav .nav li').removeClass('active');
	}

});
