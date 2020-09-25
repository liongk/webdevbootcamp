//this is an array, defined by square brackets

var americaz_most_wanted = ["Dababy", "Roddy Ricch"]
//index [0,1,2,3]

console.log(americaz_most_wanted[0])
//Dababy

var anarray = ["charger", "book", "calculator"]

console.log("I brought a "+anarray[0]+" and a " + anarray[2])
//I brought a charger and a calculator

// update values
anarray[0] = "pen"

//add value by placing at the next index
anarray[3] = "eraser"

//placing 2 indexes after th existing
anarray[5] = "sharpener"
//anarray[4] = undefined 

//length
anarray.length

// define an empty Array
var anarray2 = []

//arrays hold any datatype
var random_values = ["Harry", 0, null, undefined,true]

//push and pop functions
var colors = ["red", "orange", "yellow", "green"]
colors.push("blue")//returns index, 4
//push adds at the end without index specification.

colors.pop()
//removes last element in an array, takes no arg
//returns last element

colors
//red, orange, yellow, green

colors.unshift("black")
//add to the front of an array

colors.shift()
//removes first element of an array. - black

colors.push('orange') //orange at idx 5

//find arguments by index
colors.indexOf("orange")
//returns 1, not 5

colors.indexOf("white")
//if nonexistent returns -1

//copy elements in an array
var vehicles = ["ferrari, lamborghini, toyota, vespa, yamaha"]
var motorbikes = vehicles.slice(3,4)//vespa, yamaha
var cars = vehicles.slice(0,2) //ferrari, lamborghini, toyota
var sportscars = cars.slice(0,1) //ferrari, lamborghini
var italiancars = sportscars.slice()//without args, it copies the array