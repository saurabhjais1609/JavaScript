// Variables
// Variables in JavaScript are used to store data values.
// It can be declared using var, let, or const.

// var is function-scoped, hoisted and allow redeclaration. 
var a = 10;
console.log(a);

// let is block-scoped and can not be redeclared within the same scope.
let b = 20;
console.log(b);

// const is also block-scoped and can not be redeclared and reassigned within the same scope (though objects can still be mutated).
const c = 30;
console.log(c);

// Rules for Naming Variables
    // 1. Variable names must begin with a letter, underscore (_), or dollar sign ($).
    // 2. Subsequent characters can be letters, numbers, underscores, or dollar signs.
	// 3. Variable names are case-sensitive (e.g., age and Age are different variables).
	// 4. Reserved keywords (like function, class, return, etc.) cannot be used as variable names.

// Interesting Facts
    // 1. let or const are preferred over var
    // 2. var is function scoped: Can be accessed outside block if within the function
    // 3. let and const are block scoped: Cannot be accessed outside block even if inside the same function
    // 4. var can be redeclared in the same scope, but let and const cannot be.
    // 5. We can change elements of array or objects even if declared as const. 
if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x);  // 10 (var is function-scoped)
// console.log(y, z);  // ReferenceError (let and const are block-scoped)

var x = 10;
var x = 20; // Allowed
let y = 30;
// let y = 40; // SyntaxError
const z = 50;
// const z = 60; // SyntaxError

const ob = { a: 10 };
console.log(ob);
ob.a = 20; // Allowed	
console.log(ob);
// ob = { b: 30 };	 // TypeError

const arr = [10, 20, 30]
console.log(arr);
arr[2] = 40; // Allowed	
console.log(arr);
// arr = [50, 100]; // TypeError