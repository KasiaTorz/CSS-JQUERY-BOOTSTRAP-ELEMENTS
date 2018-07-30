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
        document.getElementById("text").innerHTML += typetext.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();