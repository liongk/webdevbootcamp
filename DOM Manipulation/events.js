//Let's get some styling done first!
var body = document.querySelector('body')
body.style.fontFamily = "arial"

var button = document.getElementsByTagName('button')[0]

button.style.background = "red"
button.style.border = "red 1px solid"
button.style.color = "white"


// The Process of Events:
// There is an event listener for a selected element.
//Hover on h1, click button, etc.

//SYNTAX : element.addEventListener(type, functionToCall)

var para = document.getElementsByTagName('p')[0]

button.addEventListener('click', function(){
    para.textContent = "Button Clicked!"
    para.classList.toggle('buttonClicked')
    //you can more than one listener
})

var lis = document.querySelectorAll('li')

for(var i = 0; i<lis.length; i++){
    lis[i].addEventListener('click', function(){
        this.classList.toggle('pink')
    });
}