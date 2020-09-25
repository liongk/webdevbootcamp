//a couple jQuery functions/methods for selecting

//$('element')
//$('element:first') // selects first
//$('element:nth-child(n)') //n is the order, child of parent element
//$('element:nth-of-type(n)') //n is the order, of parent element

//jQuery methods for chamging text
//$('element').text('text')
//$('element').html(<p>Paragraph</p>)

//attribute and value
// example:
// $('img:nth-of-type(3)').attr('src', 'https://cdn.mos.cms.futurecdn.net/ayTwFGAsPv3qQacYjURCz7.jpg')

// $(Element).attr('getter', 'setter')
//.val gives the value of an input
//.val can also set an input's value
//example
//$('input').val();//gives the input value, empty string if not filled
//$('input').val('An input')//input value will be string 'An input'