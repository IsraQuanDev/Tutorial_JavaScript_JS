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


// Conditional Statements
// If..else - Switch...case

let hour = 20;

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour >18)
    console.log('Good afternoon');
else
    console.log('Good evening');


