$(document).ready(function($) {
	"use strict";
	
	/* Menu */
	jQuery(".navigation  ul li ul").parent("li").addClass("parent-list");
	jQuery(".parent-list").find("a:first").append("<span class='menu-nav-arrow'><i class='fa fa-angle-down'></i></span>");
	
	
	/* Header mobile */
	
	jQuery(window).bind("resize", function () {
		if (jQuery(this).width() > 990) {
			jQuery(".navigation_mobile_main").addClass("navigation");
			jQuery(".navigation").removeClass("navigation_mobile");
			jQuery(".navigation").find(".navigation_mobile_click").remove();
		}else {
			jQuery(".navigation").addClass("navigation_mobile");
			jQuery(".navigation").addClass("navigation_mobile_main");
			jQuery(".navigation_mobile").removeClass("navigation");
			jQuery(".navigation_mobile").each(function () {
				if (!jQuery(this).find(".navigation_mobile_click").length) {
					jQuery(this).prepend("<div class='navigation_mobile_click'></div>");
				}
			});
		}
	});
	
	if (jQuery(window).width() > 990) {
		jQuery(".navigation_mobile_main").addClass("navigation");
		jQuery(".navigation").removeClass("navigation_mobile");
		jQuery(".navigation").find(".navigation_mobile_click").remove();
	}else {
		jQuery(".navigation").addClass("navigation_mobile");
		jQuery(".navigation").addClass("navigation_mobile_main");
		jQuery(".navigation_mobile").removeClass("navigation");
		jQuery(".navigation_mobile").each(function () {
			if (!jQuery(this).find(".navigation_mobile_click").length) {
				jQuery(this).prepend("<div class='navigation_mobile_click'></div>");
			}
		});
	}
	
	if (jQuery(".navigation_mobile_click").length) {
		jQuery(".navigation_mobile_click").click(function() {
			if (jQuery(this).hasClass("navigation_mobile_click_close")) {
				jQuery(this).next().slideUp(500);
				jQuery(this).removeClass("navigation_mobile_click_close");
			}else {
				jQuery(this).next().slideDown(500);
				jQuery(this).addClass("navigation_mobile_click_close");
			}
		});
		
		jQuery(".navigation_mobile ul li").each(function() {	
			var sub_menu = jQuery(this).find("ul:first");
			jQuery(this).hover(function() {	
				sub_menu.stop().css({overflow:"hidden", height:"auto", display:"none", paddingTop:0}).slideDown(250, function() {
					jQuery(this).css({overflow:"visible", height:"auto"});
				});	
			},function() {	
				sub_menu.stop().slideUp(250, function() {	
					jQuery(this).css({overflow:"hidden", display:"none"});
				});
			});	
		});
	}
    
    
    //fixed navigation on scroll start
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 55) {
            $('#header').addClass('header-bg');
            $('#header').removeClass('header-transparent');
        } else {
            $('#header').removeClass('header-bg');
            $('#header').addClass('header-transparent');
        }
    });



	/*---------------------------------------------------*/
    /* Progress Bar
    /*---------------------------------------------------*/
    $(document).ready(function($) {
	"use strict";
    
        $('.progress').appear(function() {
                $('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
        },{accY: -100});
        
        
    });


    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('.portfolio-box');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.filter a').click(function() {
            $('.filter .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

		

	//Testimonial
    $(".testimonial").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
        stopOnHover: true,
        autoPlay: true,
        singleItem: true,
        navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });

    //Portfolio
    $(".portfolio-carousel").owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 2500,
        stopOnHover: true,
        autoPlay: true,
        singleItem: false,
        items : 4,
        navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });
    
    //Feature
    $(".feature-box").owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 2500,
        stopOnHover: true,
        autoPlay: true,
        singleItem: false,
        items : 3,
        navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });

    //Text Slider
    $(".text-slider").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
        stopOnHover: true,
        autoPlay: true,
        singleItem: true,
        items : 1,
        navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });


    // Counter js
    $('.statistic-post').appear(function() {
		$('.timer').countTo({
			speed: 4000,
			refreshInterval: 60,
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			}
		});
	});
    
    
    
    // CountDown Coming Soon
    $('#clock').countdown("2016/07/22", function(event) {
			var $this = $(this);
			switch(event.type) {
				case "seconds":
				case "minutes":
				case "hours":
				case "days":
				case "daysLeft":
					$this.find('span#'+event.type).html(event.value);
					break;
				case "finished":
					$this.hide();
					break;
			}
		});


	// Video Background
    try{
		jQuery(".player").mb_YTPlayer();
	} catch(err) {
	}
    
    $(".video").fitVids();
    
              

	// Strt Revolution Slider
	$("#main_slider").revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:false,
      delay:6000,
      navigation: {
          arrows:{enable:true},
          bullets:{enable:true,
                  direction:"horizontal",
                  h_align:"center",
                  v_align:"bottom",
                  hide_onmobile:true,
                  hide_delay:200,
                  hide_onleave:false,
                  v_offset:45,
                  h_offset:-1,
                  space:20 }        
      },      
      responsiveLevels:[2020,1183,975,751,484],
            gridwidth:[1170,970,750,500,450],
            gridheight:[750,650,650,500,400],
            shadow:0,
            spinner:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              disableFocusListener:false
            }
    });      
              
       
	
});

$ ( function () {

	$(".video").fitVids();
	
});



 