// $('.submit').click(function(){
//     console.log('submit clicked')
// })

// $('button').click(function(){
//     console.log('button clicked')
//     $('h1').toggleClass('pinked')
// })
//copy paste to console

//keypress
// var x = 0

// $('button').keypress(function(){
//     x++
//     console.log(x)
//     console.log("You clicked the button that says " + $('button').text())
// })
//prints:
// how many times you pressed the button
//'You clicked the button that says click me!'

//on
$('button').on('click', function(){
    console.log($('button').text())
})

$('h1').on('click', function(){
     $(this).toggleClass('pinked')
})

$('button').on('mouseenter', function(){
    console.log('mouseentered!')
    $(this).css('font-weight', 'bold')
})

$('button').on('mouseleave', function(){
    console.log('mouseentered!')
    $(this).css('font-weight', 'normal')
})