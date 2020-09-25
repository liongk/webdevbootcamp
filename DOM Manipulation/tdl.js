var lis = document.querySelectorAll('li')

for(var i = 0; i<lis.length; i++){
lis[i].addEventListener('mouseover', function(){
    this.style.background = 'yellow'
})

lis[i].addEventListener('mouseout', function(){
    this.style.background = 'white'
})

lis[i].addEventListener('click', function(){
    this.classList.toggle('done')
})
}