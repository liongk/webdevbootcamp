function isEven(num){
    if (num%2 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(isEven(6))

function factorial(n){
    if(n<0){
        return undefined
    }
    else if (n==0){
        return 1
    }
    else{
        for(var i = n-1; i>0; i--){
            n *=i
        }
        return n
    }
}
console.log(factorial(4))


function kebabToSnake(str){
    var result = str.replace(/-/g,'_')
    return result
}

console.log(kebabToSnake("nef-rjvr-jvj"))
