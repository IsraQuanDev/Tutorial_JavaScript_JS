// LOOPS
// FOR - WHILE - DO...WHILE - FOR...IN - FOR ...OF

for (let i = 0; i<10; i++){
    console.log(i);
}

for (let i = 1; i<=5; i++){
    if (i%2 != 0) console.log(i);
}


for (let i=1; i<10;i+=2){
    if (i===7){
        break;
    }
    console.log("Total elephants: " + i);
}

const arr = [1,2,3];
for (let i = 0; i<= arr.length; i++){
    console.log(arr[i])
}

const capitals = {
    a: "Athens",
    b: "Belgrade",
    c: "Cairo"
};

for (let key in capitals){
    console.log(key + ": " + capitals[key]);
}

const array = [1,2,3]
for (const i in array){
    console.log(i)
}

const arr1 = ["Fred","Tom","Bob"];
for (let i of arr1){
    console.log(i)
}

// iterate oer a Map

const m = new Map();
m.set(1,"black");
m.set(2,"red");

for (let n of m){
    console.log(n)
}

// Iterate over a Set

const s = new Set();
s.add(1);
s.add("red");

for (let n of s){
    console.log(n);
}


// While 

let  i=1;
while (i<10){
    console.log(i);
    i++;
}

do {
    console.log(i)
    i++;
} while(i<10)


const myArray = [];
let i1 = 10;

do {
    myArray.push(i1);
    i1++;
} while(i1<10);
console.log(myArray);



// Conditional Statements
// If..else - Switch...case

let hour = 20;

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour >18)
    console.log('Good afternoon');
else
    console.log('Good evening');

const pet = "dog";
 
    switch (pet) {
      case "lizard":
        console.log("I own a lizard");
        break;
      case "dog":
        console.log("I own a dog");
        break;
      case "cat":
        console.log("I own a cat");
        break;
      case "snake":
        console.log("I own a snake");
        break;
      case "parrot":
        console.log("I own a parrot");
        break;
      default:
        console.log("I don't own a pet");
        break;
    }
