/*-------WOW JS -SERVICE----------*/
$(function(){
    new WOW().init();  /*to scroll and have up service*/
});

/*--PORTFOLIO---*/
$(function (){
  $("#work").magnificPopup({
    delegate: 'a',
    type: 'image'       /*img in our portfolio which, by clicking on it popup will open*/
  });
});