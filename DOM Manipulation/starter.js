var h1 = document.querySelector("h1")
//selects the h1 variable

h1.style.color = "pink";

var body = document.querySelector("body")
var isRed = false

//the animation function
function redwhiteanimation(){
if(isRed){
    body.style.background = "white"
}
else{
    body.style.background = "#f90483"
}
isRed = !isRed
}

setInterval(
    redwhiteanimation, 1000
)