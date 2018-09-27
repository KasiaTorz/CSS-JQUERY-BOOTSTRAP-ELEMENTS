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

   });
});