function greet(){
   console.log("Hello!")
   console.log("Nice to meet you!")
} 

greet();
greet();
greet();

//clear() is an example on a builtin function that clears the console.

//function with an argument
function cube(num){
    console.log(num*num*num)
}

cube(3)//3 is the arg that becomes the variable num, it prints (3*3*3) = 27

///example 2 with a name
function sayHi(name){
    console.log("Hello "+ name)
}

sayHi("kennard")

//number of args is unlimited
function personInfo(name, age, height, mass, job){
    console.log("name: " +name)
    console.log("age: " +age+" yrs")
    console.log("mass: "+ mass +" kg")
    console.log("height: " +height + " m")
    console.log("occupation: " + job)
}

personInfo("Kennard", 13, 63, 1.62, "student")
personInfo(undefined, 20, undefined, 1.62, "student")

//return keyword
prompt("square a number")
function square(x){
    return x*x
}
var res = square(x)//in a variable
alert("Square is "+res)

