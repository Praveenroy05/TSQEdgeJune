// Variables - Storage - Which stores either a single or multiple values

// int a = 10;
// Datatype variableName = value



// JS or TS

// 1. var - In modern(ES6 - ECMA SCRIPT 6 - 2015) JS /TS we do not use var keyword
// 2. let - Whenever we know that the values of a variable can change at any point of time
// 3. const - Which is used to declare a constant

//Syntax: JS
// var/let/const variableName = value;

let l = 90
l = "Rahul"
console.log(l);

// Syntax : TS
// var/let/const variableName :datatype(Optional) = value;

let k :string= "100"
console.log(k);

// tsc - Compilation from TS to JS file explicitly - that means it will generate a .js file inside our project
// tsx -  Compilation from TS to JS file implicitly - that means it will not generate a .js file inside our project

// node fileName - will be executing the .js file to return us the result




// variable use to have of 2 types
// Global Variable - 
// Local Variable - 


// var - 


if(true){
    let name3 = "John" // local variable
    console.log(name3)
   
}

let name4 = "sfdsg"

//console.log(name3);

console.log("***********************");

// var - 
// 1. scope as Global or Functional
// 2. Variable declared using var keywrod can be redeclared and reinitialied as well




// Why do we not use var keyword in the modern JS/TS
var a = 10 // global variable

if(true){
    var a = 100 // local variable
    console.log(a);
}

console.log(a); // override the global value

if(a == 10){
    console.log("a is 10");
}


// var - 
// 1. scope as Global or Functional
// 2. Variable declared using var keywrod can be redeclared and reinitialied as well
// 3. It is not mandatory to initialise the value of the variable at the time of declaration

var varibaleName = 10 //global variable


function name5(){
    var varibaleName = 20 // local variable
    if(true){
        var varibaleName = 30 // local variable
    }
    console.log(varibaleName);
}

name5()

console.log(varibaleName);

var b  // undefined
console.log(b);
b = 200
console.log(b);


var c = 10
var c = 100
var c = 10
var c = "10"
console.log(c);


// let
// 1. scope as Global or block level {...}
// 2. Variable declared using let keyword can be reinitialied but cannot be redeclared
// 3. It is not mandatory to initialise the value of the variable at the time of declaration

let f 
f = 500
console.log(f);

let d = 10
//let d = 10000


let name1 = "Rahul" // Global variable

if(true){
    let name1 = "John" // local variable
    console.log(name1); //John
}



// const
// 1. scope as Global or block level {...}
// 2. Variable declared using const keyword cannot be reinitialied but cannot be redeclared
// 3. It is mandatory to initialise the value of the variable at the time of declaration

const g = 1000 // constant
//g = 500

if(true){
    const g = 10000 // local
    console.log(g);
}

console.log(g);

const h =10

//h = 1000


// var - 
// 1. scope as Global or Functional
// 2. Variable declared using var keywrod can be redeclared and reinitialied as well
// 3. It is not mandatory to initialise the value of the variable at the time of declaration

// let
// 1. scope as Global or block level {...}
// 2. Variable declared using let keyword can be reinitialied but cannot be redeclared
// 3. It is not mandatory to initialise the value of the variable at the time of declaration

// const
// 1. scope as Global or block level {...}
// 2. Variable declared using const keyword cannot be reinitialied but cannot be redeclared
// 3. It is mandatory to initialise the value of the variable at the time of declaration




