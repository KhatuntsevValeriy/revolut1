$(document).ready(function() {


$(".progress-bar_1").circularProgress({
        color: "#25ffe4",
        line_width: 5,
        height: "150px",
        width: "150px",
        percent: 10,
        // counter_clockwise: true,
        starting_position: 0
    }).circularProgress('animate', 75, 1000);


$(".progress-bar_2").circularProgress({
        color: "#25ffe4",
        line_width: 5,
        height: "150px",
        width: "150px",
        percent: 10,
        // counter_clockwise: true,
        starting_position: 80
    }).circularProgress('animate', 90, 1000);


$(".progress-bar_3").circularProgress({
        color: "#25ffe4",
        line_width: 5,
        height: "150px",
        width: "150px",
        percent: 10,
        // counter_clockwise: true,
        starting_position: 60
    }).circularProgress('animate', 50, 1000);


$(".progress-bar_4").circularProgress({
        color: "#25ffe4",
        line_width: 5,
        height: "150px",
        width: "150px",
        percent: 10,
        // counter_clockwise: true,
        starting_position: 25
    }).circularProgress('animate', 68, 1000);


$(".progress-bar_5").circularProgress({
        color: "#25ffe4",
        line_width: 5,
        height: "150px",
        width: "150px",
        percent: 10,
        // counter_clockwise: true,
        starting_position: 60
    }).circularProgress('animate', 83, 1000);


$(".progress-bar_6").circularProgress({
        color: "#25ffe4",
        line_width: 5,
        height: "150px",
        width: "150px",
        percent: 10,
        // counter_clockwise: true,
        starting_position: 45
    }).circularProgress('animate', 50, 1000);



	 /*----------------menu--------------------*/
    $('.menu_icon').on('click', function(){
		$('.menu_icon').toggleClass('active');
		$('.mob_sidebar').toggleClass('active');
		$('body').toggleClass('mob_body');
    });
    /*---------------- end_menu--------------------*/


	$(window).bind('scroll', function(){

		var navHeight=$(window).height()-0;
		if ($(window).scrollTop() > navHeight) {
			$('.header').addClass('fixed');
		}
		else{
			$('.header').removeClass('fixed');	
		}
	});

    $('.team_sl').owlCarousel({
        
        loop: true,
        margin:30,
        nav:true,
        dots:false,
        
            responsive:{
        0:{
            items:1
        },
        600:{
            center: false,
            items:2
        },
        767:{
            
            items:3
        },
        992:{
            center: false,
            items:3
        },
        
        1200:{
            items:4
        }
    }
    });


    $('.special_sl').owlCarousel({
        loop: true,
        center: true,
        margin:50,
        nav:true,
        dots:false,
        items:1
            
    });


    $('.last_sl').owlCarousel({
        margin:50,
        loop:true,
        nav:true,
        dots:false,
        items:4,
            responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        767:{
            items:3
        },
        992:{
            items:3
        },
        
        1200:{
            items:4
        }
    }
    });



});