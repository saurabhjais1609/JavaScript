// Operators
// Operators are symbols or keywords used to perform operations on values and variables. 
// They are the building blocks of JavaScript expressions and can manipulate data in various ways.

// Arithmetic Operators
// Arithmetic Operators perform mathematical calculations like addition, subtraction, multiplication, etc. 
const sum = 5 + 3;      // Addition
const diff = 10 - 2;    // Subtraction
const p = 4 * 2;        // Multiplication
const q = 8 / 2;        // Division
console.log(sum, diff, p, q);

// Assignment Operators
// Assignment Operators are used to assign values to variables. 
// They can also perform operations like addition or multiplication while assigning the value. 
let n = 10;
n += 5;		        // n = n+5
n *= 2;		        // n = n*2
console.log(n);	    // 30

// Comparison Operators
// Comparison Operators compare two values and return a boolean (true or false). 
// They are useful for making decisions in conditional statements. 
console.log(10 > 5);	    // true
console.log(10 === "10");	// false

// Logical Operators
// Logical Operators are mainly used to perform the logical operations that determine the equality or difference between the values. 
const a = true, b = false;
console.log(a && b); 	// false	// Logical AND
console.log(a || b); 	// true	    // Logical OR
console.log(!a);		// false

// Bitwise Operators
// Bitwise operators perform operations on binary representations of numbers. 
const res = 5 & 1;  // Bitwise AND
console.log(res);	// 1

// Ternary Operator
// Ternary operator is a shorthand for conditional statements. It takes three operands. 
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);	// Adult

// Comma Operator
// Comma Operator (,) mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand.  
let n1, n2;
const result = (n1 = 1, n2 = 2, n1 + n2);
console.log(result);	// 3

// Unary Operator
// Unary operators operate on a single operand (e.g., increment, decrement). 
let x = 5;
console.log(+x);		// 5
console.log(-x);		// -5
console.log(++x);	    // 6
console.log(--x);		// 5
console.log(!x);		// false

console.log(typeof(x));	// number
// The typeof() helps to determine the type of a variable in Javascript. 
// Since Javascript is a dynamically typed programming language, typeof can be used to find the variable type.
// It can be used within a function to check the datatype of a variable or to check if a variable is declared.
// One small caveat with typeof is that typeof(NaN) returns a number. 

// Interview tip: ++x and x++ both increment the variable, but they differ in when the updated value is returned.
let num = 5;
console.log(++num); // 6 — increment first
console.log(num++); // 6 — return first, increment afterward
console.log(num);   // 7

// Relational Operators
// Relational Operators are used to compare its operands and determine the relationship between them. 
// They return a Boolean value (true or false) based on the comparison result. 
const obj = { length: 10 };
console.log("length" in obj);		    // true
console.log([] instanceof Array);		// true
// in checks if a property exists in an object.
// instanceof checks if an object is an instance of a constructor.

// BigInt Operator
// BigInt operators allow calculations with numbers beyond the safe integer range. 
const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n;
console.log(big1 + big2);	// 1111111110111111111011111111100n

// Important interview point: You cannot directly mix BigInt and Number in arithmetic operations.
// console.log(10n + 5);  // TypeError
console.log(10n + 5n); // 15n

// String Operators
// String Operators include concatenation (+) and concatenation assignment (+=), used to join strings or combine strings with other data types. 
const s = "Hello" + " " + "World";
console.log(s);

// Optional Chaining Operator (?.)
// optional chaining operator allows safe access to deeply nested properties without throwing errors if the property doesn’t exist.
const object = { name: "Aman", address: { city: "Delhi" } };
console.log(object.address?.city); 
console.log(object.contact?.phone);    //undefined