
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

var left;
var opacity;
var scale; // fieldsets poroperties which will animate//

$(".action-next").click(function(){
      current_fs= $(this).parent();
      next_fs= $(this).parent().next();
//active next step in progressbar using button next//
$("#progressbar li- form active").eq($("#form fieldset").index(next_fs)).addClass("active");

// show next fieldset//
next_fs.show();
//next fieldset will be hide //
current_fs.animate({opacity:0}, {
      step:function(now,mx){
            // scale current_fs from the right//
            scale=1-(1-now)*0.2;
      }
})
})
