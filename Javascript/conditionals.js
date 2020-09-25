// var age = prompt("How old are you?")
// if (age < 18 || age>=40){
//     alert("You are not allowed to enter the club")
//     console.log("You are not allowed to enter the club")
// }
// // else if(age >= 21){
// //     alert("You are allowed to enter the club!")
// //     console.log("You are allowed to enter the club!")
// // }
// else if(age <21){
//     alert("You may enter the club, but don't drink! ;D")
//     console.log("You may enter the club, but don't drink! ;D")
// }

// else{
//     alert("come in, have a nice time!")
//     console.log("come in, have a nice time!")
// }

var ageagain = prompt("How old are you?")
num = 1

if (ageagain<0){
    alert("error")
}
else if(ageagain == 21){
    alert("Happy 21st")
}
else if (ageagain%2 == 1 && ageagain/(Math.sqrt(ageagain))==(Math.sqrt(ageagain))){
    alert("You have a square and odd age")
}
else if(ageagain%2 == 1){
    alert("You have an odd age!")
}

else if (ageagain/(Math.sqrt(ageagain))==(Math.sqrt(ageagain))){
    alert("Your age is a perfect square!")
}

