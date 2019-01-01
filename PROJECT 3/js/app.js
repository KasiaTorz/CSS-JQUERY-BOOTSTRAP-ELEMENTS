/*var $myJQ= jQuery.noConflict();
$myJQ(document).ready(function(){
    alert();
});*/

/*-------WOW JS -SERVICE----------*/
$(function(){
    new WOW().init();  /*to scroll and have up service*/
});

/*------- OWL CAROUSEL JS -TEAM----------*/
$(function(){
$("#team-members").owlCarousel({
       items:3,
       autoplay:true,
       smartSpeed:600,
       loop:true,
       autoplayHoverPause:true,
   });
});
/*------- OWL CAROUSEL JS -REFERENCE----------*/
$(function(){
    $("#customers-reference").owlCarousel({
           items:1,
           autoplay:true,
           smartSpeed:600,
           loop:true,
           autoplayHoverPause:true,
       });
    });
    /*------- COUNTERUP JQUERY -REFERENCE----------*/
    $(function(){
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    });
/*------- OWL CAROUSEL JS -CLIENTS----------*/
$(function(){
    $("#clients-list").owlCarousel({
           items:6,
           autoplay:true,
           smartSpeed:600,
           loop:true,
           autoplayHoverPause:true,
           responsive : {
            // breakpoint from 0 up
            0 : {
                option1 : value,
                option2 : value,
                ...
            },
            // breakpoint from 480 up
            480 : {
                option1 : value,
                option2 : value,
                ...
            },
            // breakpoint from 768 up
            768 : {
                option1 : value,
                option2 : value,
                ...
            }
        }
       });
    });
/*-------SHOW AND HIDE SCROLL MENU in navigation----------*/
$(function (){

    $(window).scroll(function(){
        if($(this).scrollTop()<50){
            //hide
            $("nav").removeClass("agency-navbar-top");
            $("#back-to-top").fadeOut();
        }else{
            //show
            $("nav").addClass("agency-navbar-top");
            $("#back-to-top").fadeIn();
        }

        });
    });
/*-------Smooth SCROLL  in navigation----------*/
$ (function(){
    $("a.smooth-scroll").click( function(event){

        event.preventDefault();

//get return to property section//
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(section).offset().top -65
        },1250,"easeInOutExpo");
    });
});


/*-------close mobile menu onclick----------*/
$(function(){
    $(".navbar-collapse ul li a").on("click touch",function(){
        $(".navbar-toggle").click();
    });
});