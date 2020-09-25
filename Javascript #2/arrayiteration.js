var colors = ["green", "blue", "yellow","purple"]

for(var i = 0; i<colors.length; i++){
    console.log(colors[i])
}

function print_colors(color_name){
    console.log("******")
    console.log(color_name)
    console.log("******")
}

colors.forEach(color_name)
//prints all 4 in the array.