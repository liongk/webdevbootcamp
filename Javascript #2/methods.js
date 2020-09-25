var obj = {
    name:"Chuck",
    age: 50,
    isMale: true,
    friends: ["Kirk", "Jonathan"],
    //a method is a function in an object.
    //this helps to group code and make code more organized
    //prevents namespace collisions
    add: function(x,y){
        return x+y
    }
}

obj.add(2,5) //7
