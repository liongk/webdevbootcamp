var button = document.getElementsByTagName('button')[0]
var body = document.querySelector('body')
var h1 = document.getElementsByTagName('h1')[0]

body.style.fontFamily = "arial"

var r = Math.floor(Math.random()*256)
var g = Math.floor(Math.random()*256)
var b = Math.floor(Math.random()*256)


function random_bg_color() {
    var x = Math. floor(Math. random() * 256);
    var y = Math. floor(Math. random() * 256);
    var z = Math. floor(Math. random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    body.style.background = bgColor;
}
h1.style.textAlign = 'center'
h1.style.marginTop = '25%'
h1.style.color = "white"

button.addEventListener('click', random_bg_color)