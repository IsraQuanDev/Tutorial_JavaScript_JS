
var x = true

console.log(x)

/* global scope, function scope */
var name = 'ania'
function showAlert(){
    console.log("Hi " + name)
}

showAlert()

function findX(){
    var x = 1;
    {
        var x=2;

    }
    console.log(x)
}

findX()

function findY(){
    let x = 1;
    {
        let x=2;
        
    }
    console.log(x)
}

findY()

// Const variable

const count = [1,2,3,4,5]
//count = [1,2,7,8,9]
console.log(count)

// Data types
console.log(typeof 4);

let x1 =10;
console.log(x1+5);
console.log(x1-5);
console.log(x1*5);
console.log(x1/5);
console.log(x1%5);



