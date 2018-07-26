
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

$(".next").click(function(){
      if (animating)return false;
      animating = true;
      current_fs = $(this).parent();
      next_fs = $(this).parent().next(); 

      //*define role of next step to move next fieldset*//
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      next_fs.show();
})
