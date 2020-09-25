$('h1').css("color", "yellow")
//if this is typed in the console, h1 becomes yellow

var stylesForH1 = {
    backgroundColor: 'black',
    color: 'white'
}

$('h1').css(stylesForH1)//applies the object

$('li')//3 lis

$('li').css('color', 'blue') //text becomes blue in LIs, without loop

// without jquery

var lis = document.querySelectorAll('li')
lis.style.color('blue')