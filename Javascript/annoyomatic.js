var reply = String(prompt("Are we there yet"))

while (reply !== "yes" || reply !== "yeah"){

if ((reply == "yes" || reply == "yeah")||(reply.indexOf("yes")>=0)||(reply.indexOf("yeah")>=0)){
    alert("Yay, we made it!")
    break
}
else {
    reply = String(prompt("Are we there yet"))
}

}


