function changeColorRed(newColor){
    
document.body.style.background= "red";
}
function changeColorBlue(newColor){
    document.body.style.background= "blue";
}
function changeColorPink(newColor){
    document.body.style.background= "pink";
}
function changeColorGray(newColor){
    document.body.style.background= "gray";
}
function changeColorYellow(newColor){
    document.body.style.background= "yellow";
}

var i= 0, text;
text= "MY PORTFOLIO"

function typing(){
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();
/*Minion*/
var eyesMiniom= document.getElementById("eye");
if(eyesMiniom.length > 0){
    var offset = eyesMiniom.offset(); 
    
    function move(e){
        var center_X = (offset.left + 5) + (eyesMiniom.width() / 2);
        var center_Y = (offset.top) + (eyesMiniom.height() / 2);
        var mouse_X = e.pageX;
        var mouse_Y = e.pageY;
        
        var radius = Math.atan2(mouse_X - center_X, mouse_Y - center_Y);
        var degree = (radius * (180 / Math.PI) * -1);
        
        eyesMiniom.css('transform','rotate('+degree+'deg)');        
    }
    
    $("#boxM").mousemove(move);
}
/*hover mouse on button */
/*$(document).ready(function(){
 offset= $("#btn-hover").offset();
 $("#btn-hover").on("mouseenter",function(e){
  mouse_X= e.pageX;
  mouse_Y= e.pageY;

  relMouseX= mouseX- offset.left;
  relMouseY= mouseY- offset.top;
   $("#fillIn").css({
       left:relMouseX,
       top:relMouseY
   });
 });
});*/
$(document).mousemove(function(e){
    mouseX= e.pageX;
    mouseY= e.pageY;});
$(document).ready(function(){
 offset= $("btn-hover").offset;
});
$(document).mousemove(function(e){
 mouseX= e.pageX;
 mouseY= e.pageY;

var relMouseX= mouseX - offset.left;
var relMouseY= mouseY - offset.top;
});
frameRate= 30;
timeInterval= Math.round(1000/frameRate);
atimer= setInterval("animateFollower()",timeInterval);

function animateFollower(){
    $("#fillIn").css('left', ("relMouseX"));
    $("#fillIn").css('top', ("relMouseY"));
};
/*fadeIn*/


$(document).ready(function(){
    $("button").click(function(){
        $("#btnFirst").fadeIn();
        $("#btnSecound").fadeIn("slow");
        $("#btnThird").fadeIn(3000);
    })
});
$(document).ready(function(){
    $("button").click(function(){
        $("#btnFirst").fadeToggle();
        $("#btnSecound").fadeToggle("slow");
        $("#btnThird").fadeToggle(3000);
    });
});
$(document).ready(function(){
$("#btn-toggle").click(function(){
    $("img").toggle();
   });
});