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
            time: 1000
        });
    });