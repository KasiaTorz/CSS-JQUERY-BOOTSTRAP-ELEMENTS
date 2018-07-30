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

var i= 0, typetext;
typetext= "MY PORTFOLIO"

function typing(){
    if(i<typetext.length){
        document.getElementById("typetext").innerHTML += typetext.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
