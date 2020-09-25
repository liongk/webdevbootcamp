//objects are specified with curly bracket {
//order doesnt matter
var student1 = {
    name: "Joe",
    class: 8,
    grades: "A",
    athletic:false
}

var student2 = {
    name: "Daniel",
    class: 12,
    grades: "B",
    athletic:true
}

//retrieving data
//dot notation
console.log(student1.name)

//bracket notation
console.log(student["name"])

//reassign data
student1["class"]+=1 //9
student2["name"] = "Derek"

var city = {
// or var city = new Object()

name: "Odessia",
location: {continent: 'Erouessia', planet:'Galile'},
population: 2300000,
climate: "temperate"
}
console.log(city['climate'])

console.log(city.location.continent)

//delete attr
delete city.climate

someObject.friends[0].name

var comments = {}
comments.data = ["HAhahaha", "Lol", "Check out 3:20!"]

comments.print = function(){
    this.data.array.forEach(function(el){
        console.log(el)
    });
}