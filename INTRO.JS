
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

let y = '1';
console.log(x+Number(y))

// Data Type - Strings
let aStr = 'This is a string';
console.log(aStr + ' and I am a Stackie');
let bStr = aStr.replace('a string','Tom');
console.log(bStr);
console.log(aStr.slice(0,4));
console.log(bStr.toLowerCase());
let newArr = bStr.split(" ");
console.log(newArr)

let newArr1 = ['This', 'is', 'Tom'];
console.log(newArr1[0]);
newArr1.push('Riddle');
console.log(newArr1);
newArr1.pop();
console.log(newArr1);
let anotherArr = [1,2,3,4,5];
console.log(anotherArr);

// DAta type - Boolean
console.log(5>=5);

// DAta Type - Object 

const person = {
    firstName: "Tom",
    lastNAme: 'Riddle',
    age: 50 
};

console.log(person.firstName + " is " + person.age + " years old. ")






