/*-------WOW JS -SERVICE----------*/
$(function(){
    new WOW().init();  /*to scroll and have up service*/
});

/*--PORTFOLIO---*/
$(function (){
  $("#work").magnificPopup({
    delegate: 'a',
    type: 'image'
  });
});