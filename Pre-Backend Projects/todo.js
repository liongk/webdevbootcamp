//Check of specific todos by clicking
$('ul').on('click','li',function(){
    $(this).toggleClass('crossed')
})

$('input[type="text"]').keypress(function(event){
    //if enter key is hit
    if(event.which===13){
        if(!$(this).val()){
            alert('Todos cannot be empty')
        } 
        else{
        //grabs todotext from input
        var todoText = $(this).val()
        //makes the input empty
        $(this).val("")
        //create new li and put to ul
        //append method - adds html to the ul
        $('ul').append("<li><span>X</span> " + todoText + "</li>")
        }
    }
})

//Click on X to delete todo
$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(750, function(){
        $(this).remove()
    })
    event.stopPropagation()
})

$('h1').on('click', function(){
    var newTodoListName = prompt('Input New Todolist Name:')
    if(newTodoListName === ''){
        newTodoListName = 'Unnamed Todo List'
    }
    $('h1').text(newTodoListName)

})

$('#button').on('click', function(event){
    $('li').parent().fadeOut(750, function(){
        $(this).remove()
    })    
    event.stopPropagation()
    $('ul').empty()
    $('h1').text('Unnamed Todo List')

})
