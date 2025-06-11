// Statement or condition
// Statement allows us to excute the different block of code {...} based on different condition


// if statements
// if else statements
// if else if statements
// switch case statements



// if statements - If statement used to execute the block of code if the specified condition is true

// Syntax - 

/*
if(condition){
  // block of code 
}

*/

let element = "Collapsed"

if(element === "collapsed"){
    console.log("Element is collapsed")
}


// if else statement -

// SYntax:

/*

if(condition){
 //block of code
}
else{
 // block of code
}



*/

if(1>5){
    console.log("1 is greater than 5")
}else{
    console.log("1 is not greater than 5")
}

// let marks = 98

// if(marks >)


// if else if else
// syntax -

/*

if(condition){
  // block of code - execute
}
else if (condition) {
    // block of code - execute 
}
else if (conditions) {
    // block of code - execute
}
else{
    // block of code - execute
}

*/

let marks = 65

if(marks >= 90){
    console.log("A grade")
}else if(marks >= 80 && marks <90){
        console.log("B grade")
}
else if(marks >= 70 && marks <80){
    console.log("C grade")
}
else{
    console.log("Fail")
}


// switch statement
// Syntax

/*
switch(expression){
case value1:
    // block of code - execute
    break;
case value2:
    // block of code - execute
    break;
case value3:
    // block of code - execute
    break;
default:
    // block of code - execute
    break;
}
*/



let browserName = "opera"

switch(browserName){ // switch("safari")

    case "chrome":
        console.log("Chrome browser")
        break; //
    case "firefox":
        console.log("Firefox browser")
        break;
    case "safari":
        console.log("Safari browser")
        break;
    default:
        console.log("Unknown browser")
        break
}

console.log("*******************");



let num = 1
switch(num){ // switch(1)
    case 1 || "0":
        console.log("Day 1")
        break;
    case 2:
        console.log("Day 2")
        break;
    case 3:
        console.log("safari")
        break;
    default:
        console.log("unknown")
        break;
}

// if else if else
// Ranges
// Data types are different
// Logical operator && ||

// switch
// Single data type
// Normal comparison