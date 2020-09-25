var test1 = ["red", 'orange', 'blue', 'black']//string test
var test2 = [1,4,2,9,3]//num test
var test3 = [1,1,1,1,1]


function printReverse(list){
    for(var i = list.length - 1; i >= 0; i--){
        console.log(list[i])
    }
}
printReverse(test1) //yay, it works!


function isUniform(list){
    var first = list[0]
    for(var index = 1; index<list.length; index++){
        if (list[index]!==first){
            return false
        }
        return true
    }
}
//works yay



function sumArray(list){
    var sum=0;
    for(var idx = 0; idx < list.length; idx++){
        sum += list[idx]
    }
    console.log(sum)
}
sumArray(test2)//yay, it works!


function max(list){
    for(var i2 = 0; i2 < list.length; i2++){
        var maxNum;
        if (list[i2] >= list[i2-1]){
            maxNum = list[i2]
        }
    }
    console.log(maxNum)
}
max(test2) //works too!