// Data Types - Which defines what kind of data a variable is storing

// 2 Types of data types

// 1. Primitive data types - Only one values
        // 1. number (Combination of integer and floating point number)
        // 2. string
        // 3. boolean
        // 4. null
        // 5. undefined

        // 6. any - TS
        // 7. union - TS


// 1. number - Represents both integers (67, -90) and floating point number (90.67, 345.4353654646)
// Syntax: TS
// keyword(let/const) variableName :datatype(optional) = value

// Syntax: JS
// keyword (let/const) varaibleName = value

let num :number = 10
let num1 :number = 100.45436546457567568757 // Type Annotation

let num2 = 7563.23 // Type Inference



// Difference between Type Annotation and Type Inference

// typeof - this will reutrn us the datatype of the variable

console.log(typeof num1);


// 2. string - Combination of characters  - this, text, javas#cript

/*
1. Single Quote ('') - String Literal
2. Double Quote ("") - String Literal
3. Backtick (` `) - Template Literal
*/


// 1. Single Quote
// keyword(let/const) variableName :datatype(optional) = value
let singleQuote : string= 'JavaScript'
let doubleQuote : string = "TypeScript"

let Backtick : string = `This is a 
backtick 
string`


let age = 30 // ${}

let info = `You are of age : ${age}`
console.log(info)


// 3. boolean - true/false

let isTrue = (10>5) // true
let isFalse = (10<6) // false

// 4. null - Intentional absense of value

let num3  = null //

// 5. undefined - Variable is declared but no assigned any value

let num4 
console.log(num4) // undefined


// 6. any - 

let num5 :any= 10
num5 = "Rahul"
num5  = true
num5 = null
num5 = undefined

console.log(num5);

// 7. union - combination of datatype (number | string)

let num6 : (number | string | boolean)
num6 = 10
num6 = "This"
num6 = false


// num6 = null
// num6 = undefined


let num7 
let num8 = "test"
let num9 = "testing"
 
console.log(num7 + num8+ num9);


// 2. Non-primitive data type - 
    // 1. Array
    // 2. Object - {key : value}
    // 3. Functions
    // 4. String