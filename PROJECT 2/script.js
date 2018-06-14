$(document).on("fullscreenchange", function(){
    if ($.fullscreenHelper("state")){
    $("exit-fullscreen").css("display","block");
    $("fullscreen").css("display","none");
    }else{

    }

});


