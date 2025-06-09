// 1. Arithmetic Operators
// 2. Comparison Operators - statemetns
// 3. Logical Operators - statements
// 4. Assignment Operators - =


// Arithmetic Operators
// 1. Addition (+) - Number & string data type
let a = 10
let b = 20
console.log(a + b); // 30
console.log("TS" + "JS" +"Java"+"Python"); //TSJS
console.log(Number("10") + 20) //
console.log(10.70 + "20") //


// 2. Subtraction (-)
console.log(b - a); // 10
console.log(Number("TS") - 15);
// NaN - Not a Number
console.log(Number("20") - 15);

// Type Casting - Explicit conversion of one data type to another
// Type Coercion - Automatic conversion of one data type to another

// 3. Multiplication (*)
console.log(a * b); // 200
 console.log("TS" * "JS"); // NaN

// 4. Division (/)

let c = 11
let d = 4
console.log(c / d)
// 5. Modulus (%) - Reaminder of division
console.log(c % d); // 1

// 6. Exponentiation (**)
console.log(5 ** 10); // 5*5*5*5*5*5*5*5*5*5 // 9765625`

// 7. Increment (++) - Increases the value by 1
let e = 5
// Post increment (x++) - First action will be performed and then the value will be incremented
console.log(e++)
console.log(e);

// Pre increment (++x) - First the value will be incremented and then the action will be performed
let f = 10
console.log(++f);



// 8. Decrement (--) - Decreases the value by 1
let g = 10
// Post decrement (x--) - First action will be performed and then the value will be decremented
console.log(g--)  // 10  
console.log(g); // 9

// Pre decrement (--x) - First the value will be decremented and then the action will be performed
let h = 20
console.log(--h); // 19

console.log("*******************************************************************");

//2. Comparison Operators - Compares the two values and return the boolean value (true/false)

// 1. Equal to (==) - Compares the values only 
// 2. Not equal to (!=) - Compares the values only  
// 3. Strict equal to (===) - Compares the values and data types 
// 4. Strict not equal to (!==) - Compares the values and data types 
// 5. Greater than (>) - Compares the values 
// 6. Less than (<) - Compares the values 
// 7. Greater than or equal to (>=) - Compares the values
// 8. Less than or equal to (<=) - Compares the values



// 1. Equal to (==) - // Compares the values ONLY
let i = 10
let j = "10"

console.log(i == j);

// 2. Not equal to (!=) - Compares the values ONLY
console.log(i != j); // false - because values are same

// 3. Strict equal to (===) - Compares the values and data types
console.log(i === j); // false - because data types are different



// ==  and ===
// == checks only value, while === checks both value and data type

// 4. Strict not equal to (!==) - Compares the values and data types
console.log(i !== j); // true - because data types are different

let k = 20
let l = 15

//5. Greater than (>) - Compares the values
console.log(k > l); // true - because 20 is greater than 15

//6. Less than (<) - Compares the values
console.log(k < l); // false - because 20 is not less than 15

let m = 15
let n = 15

//7. Greater than or equal to (>=) - Compares the values
console.log(m >= n); // true - 

// 8. Less than or equal to (<=) - Compares the values
console.log(m <= n); // true - because 15 is equal to 15


console.log("*******************************************************************");

// 3. Logical Operators - Used to combine two or more conditions

// 1. Logical AND (&&) - Returns true if both conditions are true
// 2. Logical OR (||) - Returns true if at least one condition is true
// 3. Logical NOT (!) - Returns true if the condition is false


// 1. Logical AND (&&) - Returns true if both conditions are true

// true && true = true
// true && false = false  
// false && true = false
// false && false = false

console.log((10 > 5) && (20 > 15)); // true - both conditions are true
console.log((10 > 5) && (20 < 15)); // false - second condition is false
console.log((10 < 5) && (20 > 15)); // false - first condition is false
console.log((10 < 5) && (20 < 15)); // false - both conditions are false


// 2. Logical OR (||) - Returns true if at least one condition is true

// true || true = true
// true || false = true
// false || true = true
// false || false = false

console.log((10 > 5) || (20 > 15)); // true - both conditions are true
console.log((10 > 5) || (20 < 15)); // true - first condition is true
console.log((10 < 5) || (20 > 15)); // true - second condition is true
console.log((10 < 5) || (20 < 15)); // false - both conditions are false

console.log(("TS" == "TS") || ("JS" === "Java")); // true - both conditions are true


// 3. Logical NOT (!) - Returns true if the condition is false

// !true = false
// !false = true
console.log(!(10 > 5)); // false


// 4. Assignment Operators (=) - Used to assign values to variables


let o = 10; // Assignment operator