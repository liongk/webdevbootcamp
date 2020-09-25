var body = document.querySelector('body')
body.style.fontFamily = "arial";

var h1 = document.querySelector("h1")//uses css syntax, only picks the first
h1.style.color = "white"
h1.style.background = "black"

var allh1 = document.querySelectorAll("h1")

var highlight_green = document.getElementById("highlighted")
highlight_green.style.background = '#b3F9C6'

console.dir('highlight_green')

var special_texts = document.getElementsByClassName("bolded")
console.log(special_texts[0])//List Item 2

// special texts will be an array with 2 elements, both of the li's

var list_elements = document.getElementsByTagName("li")
list_elements.style.color = "blue"