/*var $myJQ= jQuery.noConflict();
$myJQ(document).ready(function(){
    alert();
});*/

/*-------WOW JS -SERVICE----------*/
$(function(){
    new WOW().init();  /*to scroll and have up service*/
});

/*-----------Magnific pop--- */
$('#work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
  });