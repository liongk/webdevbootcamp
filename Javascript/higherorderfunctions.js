//higher order functions can return or have arguments as functions.
function sing(){
    console.log('Twinkle twinkle')
    console.log('Little Star')
}

setInterval(sing, 500)//ms

clearInterval(/*intervalid*/)

//we can do this as well
setInterval(function(){
    console.log('hello')
}, 5000)

clearInterval(/*intervalid*/)

