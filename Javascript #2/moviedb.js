var movielist = [
    {
        name: "In Bruges",
        rating: 5,
        hasWatched: true 
    },
    {
        name: "Frozen",
        rating: 4.5,
        hasWatched: false 
    },
    {
        name: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true

    },
    {
        name:"Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
]

for(var i =0; i < movielist.length; i++){
    if (movielist[i].hasWatched == true){
        console.log('You have watched "' + movielist[i].name + '" - ' + movielist[i].rating + " stars")
    }
    else if (movielist[i].hasWatched == false){
        console.log('You have not watched "' + movielist[i].name + '" - ' + movielist[i].rating + " stars")
    }
}
