var number = Number(prompt("enter income. we will calculate the income tax based on the UK system!"))
var incomeTax;
if (number <= 11850){
    incomeTax = 0
    alert(incomeTax + " income tax")
}
else if (number > 11850 && number <= 46350){
    number -= 11850
    incomeTax = number*0.2
    alert(incomeTax + " income tax")
}

else if (number > 46350 && number<= 150000){
    var number2 = (46350-11850)*0.2
    var number3 = (number - 46350)*0.4 
    incomeTax = number2 + number3
    alert(incomeTax + " income tax")
}

else if (number > 150000){
    var number2 = (46350-11850)*0.2
    var number3 = (150000 - 46350)*0.4
    var number4 = (number - 150000)*0.45
    incomeTax = number2 + number3+number4
    alert(incomeTax + " income tax")

}