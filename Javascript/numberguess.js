var guessnumber = 4;

number_guessed = Number(prompt("Guess a Number"))
if (number_guessed < guessnumber){
    alert("Too Low")
}

else if (number_guessed>guessnumber){
    alert("Too High")
}
else{
    alert("You guessed right")
}