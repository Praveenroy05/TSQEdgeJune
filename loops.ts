// Loops - Which will execute the same block of code {...} multiple times

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("********************************");


for(let i=4; i<=5; i++){
    console.log(i); // 4 5
}

console.log("********************************");

// 1. for loop
      // a. for loop - Traditional for loop - If we know how many time we have to run the iteration
      // b. for...of loop - is used to iterate through iteratable object - Array - [1,2,3,4], string
      // c. for...in loop - Loops through the properties of an object. - {key : value}
// 2. while loop - When we do not know how many times to we have the run the iteration
// 3. do-while loop - If we want to execute the loop at least for one time before checking the condition


// let i = [1,2,3,4,5]

// for (let e of i){
//     console.log(e);
// }

// const obj = {
//     name : "John",
//     age : 25,
//     city : "New York",
// }

// for(let key in obj){
//     console.log(obj[key])
// }

// console.log(obj["name"]);


// 1. for loop
// Syntax

/*
for(initialization; condition; increment/decrement){
        // block of code - Executed
}

initialization = Initialise the varaible to start the execution. Ex: - let i = 0
condition = Condition to check if the loop should continue or not. Ex: - i <=5
increment/decrement = Increment or decrement the variable after each iteration. Ex: - i++ or i


*/

// 1... 10

for(let i =1; i<11; i++){
    console.log(i);  // 1 2 .....10 
}

console.log("*************************");

// 2. while loop - 
// Syntax

/*

initialisation
while(condition){
    // block of code - Executed
    increment/decrement
}

*/

// 1... 10

let i = 1
while(i <11){
    console.log(i) // 1 2 ......10
    i++ // 2... 11
}

console.log("*********************");

// 10....1

let j =10
while(j<=1){
    console.log(j) // 10 9......1
    j-- //9 
}


console.log("*********************");

// do while loop
// Syntax
/*
initialisation
do{
    // block of code
    increment/decrement
}while (condition);

*/

let i1 =10
do{
    console.log(i1) // 10
    i1-- //9 
}while(i1<=1)


