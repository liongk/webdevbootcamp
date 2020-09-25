var score1 = 0;
var score2 = 0;
var plays = 5;
var gameOver = false;

var body = document.querySelector('body')
body.style.fontFamily = "arial"
body.style.fontSize = "25px"
body.style.textAlign= 'center'
body.style.marginTop= '15%'

var scoremeter = document.querySelector('h1')
scoremeter.style.width = '25%'
scoremeter.style.margin = 'auto'
scoremeter.style.marginBottom = '2.5%'
scoremeter.style.background = 'black'
scoremeter.style.color = 'white'

var addPlay = document.getElementById('addPlay')
addPlay.style.background = 'white'
addPlay.style.border = '1px solid black'
addPlay.style.height = '25px'
addPlay.style.marginLeft = '4%'

// addPlay.addEventListener('click', function(){
//     if(gameOver = false){
//     plays++
//     document.getElementById('numberOfPlays').textContent = plays
// }})

var playerone = document.getElementById('player1')
playerone.style.background = '#ff2800'
playerone.style.border = 'none'
playerone.style.paddingLeft ='4%'
playerone.style.paddingRight ='4%'
playerone.style.marginRight = '2%'
playerone.style.height = '35px'
playerone.style.color = 'white'
playerone.addEventListener('click', function(){
    if(!gameOver){
        score1++
    
    if(score1 === plays){
        document.getElementById('scoreplayer1').classList.add('winner')
        gameOver = true;
    }
    scoremeter.textContent = score1 + ' - ' + score2
}});

var playertwo = document.getElementById('player2')
playertwo.style.background = '#0c71e0'
playertwo.style.border = 'none'
playertwo.style.paddingLeft ='4%'
playertwo.style.paddingRight ='4%'
playertwo.style.height = '35px'
playertwo.style.color = 'white'
playertwo.addEventListener('click', function(){
    if(!gameOver){
        score2++
        if(score2 === plays){
        document.getElementById('scoreplayer2').classList.add('winner')
        gameOver = true;
        }
        scoremeter.textContent = score1 + ' - ' + score2
    }});

var resetbtn = document.getElementById('resetbtn')
resetbtn.style.background = 'black'
resetbtn.style.color = 'white'
resetbtn.style.border = '2px solid black'
resetbtn.style.width= '25%'
resetbtn.style.height= '35px'
/*resetbtn.addEventListener('click', function(){
    score1 = 0
    score2 = 0
    plays = 0
    scoremeter.textContent = score1 + ' - ' + score2
    document.getElementById('score1').style.color = 'white'
    document.getElementById('numberOfPlays').textContent = plays

})

if(plays <= score1){
    document.getElementById('score1').style.color = '#ffd700'
}

else if(plays <= score2){
    document.getElementById('score2').style.color = '#ffd700'
}*/