// Datatypes
// Datatypes define what kind of values a variable can hold and how those values behave in a program. 
// Each datatype has its own methods and operations that control how it can be used.
// In JavaScript datatypes are categorized into Primitive and Non-Primitive types.

// Primitive Datatypes
// Primitive datatypes represent simple, immutable values stored directly in memory, ensuring efficiency in both memory usage and performance.

// Number
// Number datatype includes both integers and floating-point numbers.
let n1 = 2;
console.log(n1);
let n2 = 1.3;
console.log(n2);
let n3 = Infinity;
console.log(n3);		// Infinity
let n4 = 'something here too' / 2;
console.log(n4);		// NaN

// String
// String is a series of characters that are surrounded by quotes.
let str1 = "Hello There";
console.log(str1); 
let str2 = 'Single quotes work fine';
console.log(str2); 
let str3 = `Can embed ${str1}`;
console.log(str3);		// Can embed Hello There

// Boolean
// Boolean datatype has only two values i.e., true and false. 
let b1 = true;
console.log(b1);  
let b2 = false;
console.log(b2);

// Null
// The 'null' datatype defines a special value that represents nothing, or empty value. 
let age = null;
console.log(age);

// Undefined
// A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it. 
let a;
console.log(a);

// Symbol
// Symbols are unique and immutable primitive values used as identifiers for object properties. 
let s1 = Symbol("Geeks");
let s2 = Symbol("Geeks");
console.log(s1 == s2);		// false

// BigInt
// BigInt is a built-in object that provides a way to represent whole numbers greater than 2 to the power 53.
// The largest number that JavaScript can reliably represent with the Number primitive is 2 to the power 53, which is represented by the MAX_SAFE_INTEGER constant. 
let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);

// Non-primitive Datatype
// Non-primitive datatypes are the data types that are derived from primitive data types.

// Object
// Objects are key-value pairs used to store data, created with {} or the new keyword. 
// They are fundamental as nearly everything in JavaScript is an object.
let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type);

// Array
// Array is a special kind of object used to store an ordered collection of values, which can be of any datatype. 
let a1 = [1, 2, 3, 4, 5];
console.log(a1);
let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);

// Function
// A function is a block of reusable code designed to perform a specific task when called. 
// Defining a function to greet a user
function greet(name) { 
   return "Hello, " + name + "!"; 
}
// Calling the function
console.log(greet("Radhika"));

// Date Object
// Date object is used to work with dates and times, allowing for date creation, manipulation, and formatting. 
// Creating a new Date object for the current date and time
let currentDate = new Date();
// Displaying the current date and time
console.log(currentDate);

// Regular Expression
// Regular Expression is an object used to define search patterns for matching text in strings. 
// Creating a regular expression to match the word "hello"
let pattern = /hello/;
// Testing the pattern against a string
let result = pattern.test("Hello, world!"); 
// Returns false because "hello" is not present
console.log(result);		