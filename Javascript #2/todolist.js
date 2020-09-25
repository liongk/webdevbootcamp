window.setTimeout(function() {
    // put all of your JS code from the lecture here
    var todos = [];

    while(input!=="quit"){

    var input = prompt('What do you want to do?')
    if(input=="list"){
        todos.forEach(function(todo, i){
            console.log((i+1) + ": " + todo)
        })
    }
    else if (input == 'new'){
        //ask for new todo
        var newtodo = prompt("Enter new todo")
        todos.push(newtodo)
    }
    else if(input == 'delete'){
        var index = Number(prompt("Enter index of the list value you want to delete"))
        todos.splice(index, 1)
    }
    
}

}, 500);