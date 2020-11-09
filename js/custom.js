/*
Copyright (c) 2017 
------------------------------------------------------------------


-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var SEO = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- SEO Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			// this.Masonry();
			// this.Search();
			this.Magnific_popup();
			// this.Grid_List_view();
			// this.RangeSlider();
			// this.Custom_Popup();
			this.MainSlider();
			 // this.ShopSlider();
			 // this.Related_Product();
			 // this.Search_icon();
			this.Portfolio_Sorting();
			//this.MainSlider();
			this.ConutTo();
			this.Client_Slider();
			//this.TestimonialSlider();
			//this.ProductSlider();
			//this.Project_sorting();
			this.ContactFormSubmit();
			
		},
		
		/*-------------- SEO Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
		},
		//mesonry content
		// Masonry: function(){
			// if($('#grid').length > 0){	
				// new AnimOnScroll( document.getElementById( 'grid' ), {
					// minDuration : 0.4,
					 // maxDuration : 0.7,
					// viewportFactor : 0.2
				// } );
			// }
		// },
		//Search 
		// Search:function(){
			// $('.bb_search a i').on("click", function() {
				// $('.bb_topsearch').slideToggle();
			// });
		// },
		// Search_icon: function() {
            // $(".hb_search_icon").click(function() {
                // $(".hb_search_wrapper").toggleClass('open_form');
            // });
        // },
		// wowanimation: function(){
			// new WOW().init()
		// },
		
		//counter on home page
		ConutTo: function(){
			if($('.timer').length > 0){	
				$('.timer').appear(function() {
					$(this).countTo();
				});
			}
		},
		//Testimonial slider on home page
		// TestimonialSlider: function(){
			// if($('.hb_testimonial_slider .owl-carousel').length > 0){		
				 // $('.hb_testimonial_slider .owl-carousel').owlCarousel({
					// margin:30,
					// nav: false,
					// // // navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
					// dots: true,
					// autoplay:false,
					// stagePadding:30,
					// smartSpeed:450,
					// loop:true,
					// items: 1,
					// animateIn: 'flipInX',
					// animateOut: 'zoomOut',					
				// });
			// }
		// },
		// Custom_Popup: function(){
			// if($('.hb_login_popup').length > 0){
				// $('.hb_login_popup a').click(function() {
					// $('.hb_login').css("opacity", 1);
					// $('.hb_login').css("z-index", 2);
				// });
				// $('.hb_close_btn').click(function() {
					// $('.hb_login').css("opacity", 0);
					// $('.hb_login').css("z-index", -1);
				// });
			// }
			
		// },
		// TestimonialSlider: function(){
			// if($('.bb_testimonial_slider .owl-carousel').length > 0){		
				// $('.bb_testimonial_slider .owl-carousel').owlCarousel({
					// margin:0,
					// nav: false,
					// dots: true,
					// autoplay:true,
					// smartSpeed:450,
					// loop:true,
					// items:1
				// });
			// }
		// },
		MainSlider: function(){
			if($('.seo_main_slider .owl-carousel').length > 0){	
				var owl_home = $('.seo_main_slider .owl-carousel');
				$('.seo_main_slider .owl-carousel').owlCarousel({
					margin:0,
					smartSpeed:200,
					nav: false,
					dots: false,
                    autoplay: true,
                    slideSpeed: 500,
					loop:true,
					items:1,
					mouseDrag:false,
					touchDrag:false,
				});
				owl_home.on('changed.owl.carousel',function(property){
					$(this).find('.seo_slider_content').addClass('loaded');
					setTimeout(function(){
						$('.seo_slider_content').removeClass('loaded');	
					},1000);
				});	
			}
		},
			// var tpj=jQuery;
			// var revapi1174;
			// tpj(document).ready(function() {
				// if(tpj("#rev_slider_1174_1").revolution == undefined){
					// revslider_showDoubleJqueryError("#rev_slider_1174_1");
				// }else{
					// revapi1174 = tpj("#rev_slider_1174_1").show().revolution({
						// sliderType:"hero",
						// sliderLayout:"fullscreen",
						// dottedOverlay:"none",
						// delay:9000,
						// navigation: {
						// },
						// responsiveLevels:[1240,1024,778,480],
						// visibilityLevels:[1240,1024,778,480],
						// gridwidth:[1240,1024,778,480],
						// gridheight:[868,768,960,720],
						// lazyType:"none",
						// parallax: {
							// type:"scroll",
							// origo:"slidercenter",
							// speed:400,
							// levels:[10,15,20,25,30,35,40,-10,-15,-20,-25,-30,-35,-40,-45,55],
							// type:"scroll",
						// },
						// shadow:0,
						// spinner:"off",
						// autoHeight:"off",
						// fullScreenAutoWidth:"off",
						// fullScreenAlignForce:"off",
						// fullScreenOffsetContainer: "",
						// fullScreenOffset: "60px",
						// disableProgressBar:"on",
						// hideThumbsOnMobile:"off",
						// hideSliderAtLimit:0,
						// hideCaptionAtLimit:0,
						// hideAllCaptionAtLilmit:0,
						// debugMode:false,
						// fallbacks: {
							// simplifyAll:"off",
							// disableFocusListener:false,
						// }
					// });
				// }
			// });	/*ready*/
		//},
		// MainSlider: function(){
			// if($('.seo_main_slider .owl-carousel').length > 0){	
				// var owl = $('.seo_main_slider .owl-carousel');	
			 // // Carousel initialization
				// owl.owlCarousel({
				  // loop:true,
				   // margin:0,
				   // navSpeed:300,
				   // nav:false,
				   // autoplay: true,
				   // items:1
			  // });
			// }
		// }
		// //Magnific Popuo
		Magnific_popup: function() {
			$('.seo_portfolio_div').magnificPopup({
                delegate: 'a.seo_portfolio_gallery',
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true,
				},
			});
			$('.seo_blog_img').magnificPopup({
                delegate: 'a.seo_blog_popup',
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true,
				},
			});
			// $('.product-image-overlay .zoom_icon').magnificPopup({
				// type: 'image',
				// gallery: {
					// enabled: true
				// }
			// }); 
			// // //for video
            // $('.popup-gmaps').magnificPopup({ 
			  // disableOn: 700,
			  // type: 'iframe',
			  // mainClass: 'mfp-fade',
			  // removalDelay: 160,
			  // preloader: false,

			  // fixedContentPos: false
        }, 
		// Grid_List_view:function(){
			// if($('.hb_shop_view').length > 0){
				// $('.hb_shop_view').on('click', 'li', function() {
					// $('.hb_shop_view ul li.active').removeClass('active');
					// $(this).addClass('active');
				// });
				// $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
				// $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
			// }
		// },
		// RangeSlider:function(){
			// if($('#slider-range').length > 0){
				// $( "#slider-range" ).slider({
					// range: true,
					// min: 0,
					// max: 500,
					// values: [ 22, 300 ],
					// slide: function( event, ui ) {
						// $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
					// }
				// });
				// $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
					// " - $" + $( "#slider-range" ).slider( "values", 1 ) );
			// }
		// },
		// ShopSlider: function(){
			// var tpj=jQuery;							
					// var revapi8;
					// tpj(document).ready(function() {
						// if(tpj("#rev_slider_8_1").revolution == undefined){
							// revslider_showDoubleJqueryError("#rev_slider_8_1");
						// }else{
							// revapi8 = tpj("#rev_slider_8_1").show().revolution({
								// sliderType:"standard",
								// sliderLayout:"auto",
								// dottedOverlay:"none",
								// delay:9000,
								// navigation: {
									// keyboardNavigation:"off",
									// keyboard_direction: "horizontal",
									// mouseScrollNavigation:"off",
									// onHoverStop:"off",
									// touch:{
										// touchenabled:"off",
										// swipe_threshold: 75,
										// swipe_min_touches: 1,
										// swipe_direction: "horizontal",
										// drag_block_vertical: false
									// }
									
									// ,
									// tabs: {
										// style:"ares",
										// enable:true,
										// width:70,
										// height:70,
										// min_width:70,
										// wrapper_padding:20,
										// wrapper_color:"#ffffff",
										// wrapper_opacity:"1",
										// tmp:'<div class="tp-tab-content">  <span class="tp-tab-date">{{param1}}</span>  <span class="tp-tab-title">{{param2}}</span></div><div class="tp-tab-image"></div>',
										// visibleAmount: 4,
										// hide_onmobile: true,
										// //hide_under:776,
										// hide_onleave:false,
										// //hide_delay:200,
										// direction:"vertical",
										// span:true,
										// position:"outer-right",
										// space:0,
										// h_align:"right",
										// v_align:"top",
										// h_offset:0,
										// v_offset:20
									// }
								// },
								// gridwidth:800,
								// gridheight:640,
								// lazyType:"single",
								// shadow:0,
								// spinner:"off",
								// stopLoop:"on",
								// stopAfterLoops:0,
								// stopAtSlide:1,
								// shuffle:"off",
								// autoHeight:"off",
								// disableProgressBar:"on",
								// hideThumbsOnMobile:"off",
								// hideSliderAtLimit:0,
								// hideCaptionAtLimit:0,
								// hideAllCaptionAtLilmit:0,
								// debugMode:false,
								// fallbacks: {
									// simplifyAll:"off",
									// nextSlideOnWindowFocus:"off",
									// disableFocusListener:false,
								// }
							// });
						// }
					// });	/*ready*/
		// },
		Client_Slider: function(){
			if($('.seo_client_slider .owl-carousel').length > 0){		
				$('.seo_client_slider .owl-carousel').owlCarousel({
					margin:30,
					nav: false,
					navText:[],
					dots: false,
					autoplay:true,
					smartSpeed:450,
					loop:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:2
						},
						768:{
							items:2
						},
						992:{
							items:3
						},
						1200:{
							items:3
						}
					}
				});
			}
		},
		Portfolio_Sorting: function(){
			if($('.seo_filter a').length > 0){
				$(".seo_filter a").on("click", function(e) {
					e.preventDefault();
				});
				$('#portfolio').mixItUp();
			}	
		},
		//contact form submition
		ContactFormSubmit: function(){
			if($('#send_btn').length > 0){	
				$("#send_btn").on("click", function() {
					var e = $("#ur_name").val();
					var t = $("#ur_mail").val();
					// var ph = $("#ur_phone").val();
					var s = $("#sub").val();
					var r = $("#msg").val();
					$.ajax({
						type: "POST",
						url: "ajaxmail.php",
						data: {
							username: e,
							useremail: t,
					// userphone: ph,
							usersub: s,
							 mesg: r
						},
						success: function(n) {
							var i = n.split("#");
							if (i[0] == "1") {
								$("#ur_name").val("");
								$("#ur_mail").val("");
								// $("#ur_phone").val("");
								$("#sub").val("");
								$("#msg").val("");
							    $("#err").html(i[1]);
							} else {
							    $("#ur_name").val(e);
								$("#ur_mail").val(t);
								// $("#ur_phone").val(ph);
								$("#sub").val(s);
								$("#msg").val(r);
								$("#err").html(i[1]);
							}
						}
					});
				});
			}
		 }
		
		
		   
	};

	SEO.init();

	// Load Event
	// Loader js
	$(window).on('load', function() {
		jQuery("#seo_preloader_box").fadeOut();
		jQuery("#seo_preloader_wrapper").delay(350).fadeOut("slow");
               //window height
		//var h = window.innerHeight;
		//$(".im_mainslider img").css("height", h);
		//$(".im_mainslider img").css("width", "100%");
		
		
		//window height
		// var hei= $(window).height() - 113;
		// $(".bb_slider_wrapper").css("height", hei);
		// $(".bb_slider_bgimg").css("height", hei);
	});

	// Scroll Event
	// fixed menu
	$(window).on('scroll', function () {
	     // if ($(this).scrollTop() > 300) {
                 // $(".ac_mainheader").addClass("ac_fixed");
            // } else {
                // $(".ac_mainheader").removeClass("ac_fixed");
	    // }
		if ($(this).scrollTop() >100) {
			$(".seo_gototop").fadeIn()
			} else {
			$(".seo_gototop").fadeOut()
			}
		
		});
	
	
	$(window).ready(function(e) {
        // $.each($('div.progress-bar'), function() {
            // $(this).css('width', $(this).attr('aria-valuetransitiongoal') + '%');
        // });
		$(".seo_gototop").on("click", function() {
				$("html, body").animate({
				scrollTop: 0
				}, 600);
				return false
			});
    });
}(jQuery));
// menu js