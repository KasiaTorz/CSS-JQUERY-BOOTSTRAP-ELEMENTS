
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
var current_fs; 
var next_fs;
var previous_fs;

