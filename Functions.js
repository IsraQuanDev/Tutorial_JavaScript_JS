function showMessage(){
    console.log("Hello everyone! ")

}


showMessage()

// Local variables
//  A variable declared inside a function is only
// visible inside that function

function Hello(){
    let message = "hello"
    console.log(message)
}

Hello();
//console.log(message)

//Outer variables

let userName = 'John';

function showMessage2() {
  let message2 = 'Hello, ' + userName;
console.log(message2);
}

showMessage2(); // Hello, John

// function decalaration

function sum(a,b){
    return a+b;
}

Hill('John');
function Hill(name){
    console.log(`Hello, ${name}`);
}

// function expression
let sum2 = function(c,d){
    return c+d;
};

// tesla("model 332");
// let tesla = function(model){
    // console.log(`hello, ${model}`;)
// };

// Arrow functions 

let sum3 = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum3(1, 2) ); 




