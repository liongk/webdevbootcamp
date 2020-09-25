var colors = generateRandomColors(6);
var scoreDisplay = document.getElementById('score')
var score = 0
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector('#easyBtn')
var hardButton = document.querySelector('#hardBtn')

easyButton.addEventListener('click', function(){
	easyButton.classList.add('selected')
	hardButton.classList.remove('selected')
	colors = generateRandomColors(3)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i]
		}
		else{
			squares[i].style.background = 'none'
		}
	}
})

hardButton.addEventListener('click', function(){
	easyButton.classList.remove('selected')
	hardButton.classList.add('selected')
	colors = generateRandomColors(6)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i]
	}
})

resetButton.addEventListener("click", function() {

	this.textContent = "New Colors"
	
	if(easyButton.classList.contains('selected'))
	{

		//generate all new colors
		colors = generateRandomColors(3);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colorDisplay to match picked Color
		colorDisplay.textContent = pickedColor;
		messageDisplay.textContent = '';
		//change colors of squares
			for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i]
		}
		else{
			squares[i].style.background = 'none'
		}
	}}
//-------------------------------------------------------
	if(hardButton.classList.contains('selected')){

	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = '';

	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}}
	h1.style.backgroundColor = "#4169e1";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		
		//compare color to pickedColor --> win game!
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			if(hardButton.classList.contains('selected')){
				changeColorsHard(clickedColor);}
			if(easyButton.classList.contains('selected')){
				changeColorsEasy(clickedColor)}
			h1.style.background = clickedColor;
			score ++
			scoreDisplay.textContent = score
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColorsHard(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function changeColorsEasy(color){
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = color
		}
		else{
			squares[i].style.background = 'none'
		}
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
