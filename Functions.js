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

let double = n => n*2;
console.log(double(3));

let Bye = () => console.log("Bye");

Bye();


let sm3 = (x,y) => x + y;

function evaluateEven(n) {
  if (n%2==0){
    return 'even'
  } else {
    return 'odd'
  }
}
let sayHello = function(name, status){
  let message = 'Hi I am ' + name + ' and the number is ' + status;
  console.log(message);
}
sayHello("Stackie", evaluateEven(sum(5,3)));


// CAllbacks
function isOdd(number) {
    return number % 2 != 0;
  }
  function isEven(number) {
    return number % 2 == 0;
  }
  
  function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
      if (fn(number)) {
        results.push(number);
      }
    }
    return results;
  }
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  console.log(filter(numbers, isOdd));
  console.log(filter(numbers, isEven));


// Synchronous callbacks 
// It is executed during the execution of the high-order function


// function to simulate the network request: setTimeout()
// function download(url) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Downloading ${url} ...`);
//     },1000);
// }

// function process(picture) {
//     console.log(`Processing ${picture}`);
// }

// let url = 'https://www.javascripttutorial.net/pic.jpg';

// download(url);
// process(url);

// To resolve this issues 

// function download1(url, callback) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Downloading ${url} ...`);
        
//         // process the picture once it is completed
//         callback(url);
//     }, 1000);
// }

// function process1(picture) {
//     console.log(`Processing ${picture}`);
// }

// let url1 = 'https://wwww.javascripttutorial.net/pic.jpg';
// download1(url1, process1);



//  code more concise

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // process the picture once it is completed
        callback(url);

    }, 1000);
}

let url = 'https://www.javascripttutorial.net/pic.jpg';
download(url, function(picture) {
    console.log(`Processing ${picture}`);
}); 

