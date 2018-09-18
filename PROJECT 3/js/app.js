var $myJQ= jQuery.noConflict();
$myJQ(document).ready(function(){
    alert();
});

/*-------WOW JS -SERVICE----------*/
$(function(){
    new WOW().init();  /*to scroll and have up service*/
});

/*--PORTFOLIO---*/
$.noConflict();
$('#work').magnificPopup({
    type: 'image'
    // other options
  });
  