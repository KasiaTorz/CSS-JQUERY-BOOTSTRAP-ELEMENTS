
       $(document).on("fullscreenchange", function () {
            if ($.fullScreenHelper("state")) {
                  $("#exitfullscreen").css("display","block");
                  $("#fullscreen").css("display","none");
            } else {
                  $("#exitfullscreen").css("display","none");
                  $("#fullscreen").css("display","block");
            }
          });

$(document).ready(function(){
    $("#skate").animate({left:"70%"},1000);
    $("#msg").slideDown(1000);
    $("#msg2").delay(500).slideDown(1000);
});

//jqiuery to the form//
var current_fs; //fieldsets//
var next_fs;
var previous_fs;

var left;// fieldsets properties which will be animate//
var opacity;// fieldsets properties which will be animate//
var scale; // fieldsets properties which will be animate//
var animating; //variable which will  prevent from quick multi-click glitches//

$(".action-next").click(function(){
      if(animating) return false;
      animating = true;
      current_fs= $(this).parent();
      next_fs= $(this).parent().next();
//active next step in progressbar using button next//
$("#progressbar li- form active").eq($("fieldset").index(next_fs)).addClass("active");

// show next fieldset//
next_fs.show();
 //next fieldset will be hide //
      current_fs.animate({opacity:0}, {
            step:function(now,mx){
                  // scale current_fs from the right//
                  scale=1-(1-now)*0.2;
                  // bring next_fs form right//
                  left= (now*50)+"%";
                  //increase opacity to next_fs //
                  opacity= 1- now;
                  current_fs.css({
                        'transform':'scale('+scale+')',
                        'position':'absolute'
            });
                  next_fs.css({'left':left, 'opacity':opacity});
            },
            duration:800,
            complete:function(){
                  current_fs.hide();
                  animating = false;
            },
            easing:'easeInOutBack'
      });

});
$(".action-next-first").click(function(){
      current_fs= $(this).parent();
      next_fs= $(this).parent().next();
//active next step in progressbar using button next//
$("#progressbar li- form active").eq($("fieldset").index(next_fs)).addClass("active");

// show next fieldset//
next_fs.show();
 //next fieldset will be hide //
      current_fs.animate({opacity:0}, {
            step:function(now,mx){
                  // scale current_fs from the right//
                  scale=1-(1-now)*0.2;
                  // bring next_fs form right//
                  left= (now*50)+"%";
                  //increase opacity to next_fs //
                  opacity= 1-now;
                  current_fs.css({'transform':'scale('+scale+')',
                                   'position':'absolute'
            });
                  next_fs.css({'left':left, 'opacity':opacity});
            },
            duration:800,
            complete:function(){
                  current_fs.hide();
            },
            easing:'easeInOutBack'
      });

});
$(".action-previous").click(function(){
      current_fs= $(this).parent();
      previous_fs= $(this).parent().prev();
//de-active next step in progressbar using button next//
$("#progressbar li-form ").eq($("fieldset").index(current_fs)).removeClass("active");

// show next fieldset//
previous_fs.show();
 //next fieldset will be hide //
      current_fs.animate({opacity:0}, {
            step:function(now,mx){
                  // scale previous_fs from the form//
                  scale=0.8+(1-now)*0.2;
                  // bring previous_fs form left//
                  left= ((1-now)*50)+"%";
                  //increase opacity to next_fs //
                  opacity= 1-now;
                  current_fs.css({'left':left});
                  previous_fs.css({'left':left, 'opacity':opacity});
            },
            duration:800,
            complete:function(){
                  current_fs.hide();
            },
            easing:'easeInOutBack'
      });

});