// ==========================================================
// JAVASCRIPT DATA TYPES
// ==========================================================
//
// A Data Type tells JavaScript
// what kind of value is stored
// inside a variable.
//
// Example:
//
// let age = 20;
//
// JavaScript knows
// 20 is a Number.
//
// ==========================================================



// ==========================================================
// 1. STRING
// ==========================================================
//
// A String is a sequence of characters.
//
// Used for:
//
// Names
// Messages
// Addresses
// Email
// Passwords
// etc.
//
// Strings can be written using:
//
// ""
// ''
// `` (Template Literals)
// ==========================================================

let firstName = "John";
let lastName = 'Doe';
let message = `Welcome`;

console.log(firstName);
console.log(lastName);
console.log(message);

// typeof tells the datatype

console.log(typeof firstName);

// Output:
//
// string





// ==========================================================
// 2. NUMBER
// ==========================================================
//
// Stores:
//
// Integer
// Decimal
// Negative numbers
//
// JavaScript has only ONE
// Number datatype.
//
// Unlike Java,
// there is no:
//
// int
// float
// double
//
// Everything is Number.
// ==========================================================

let age = 22;

let price = 99.99;

let temperature = -10;

console.log(age);
console.log(price);
console.log(temperature);

console.log(typeof age);

// Output:
//
// number





// ==========================================================
// Special Numbers
// ==========================================================

console.log(Infinity);

console.log(-Infinity);

console.log(NaN);

// typeof

console.log(typeof Infinity);

console.log(typeof NaN);

// Output:
//
// number
//
// number







// ==========================================================
// 3. BIGINT
// ==========================================================
//
// Used for very large integers.
//
// Add "n" at the end.
//
// Introduced because Number
// has a safe limit.
//
// Number.MAX_SAFE_INTEGER
//
// 9007199254740991
// ==========================================================

let bigNumber = 123456789123456789123456789n;

console.log(bigNumber);

console.log(typeof bigNumber);

// Output:
//
// bigint







// ==========================================================
// 4. BOOLEAN
// ==========================================================
//
// Stores only:
//
// true
// false
//
// Used in:
//
// Conditions
// Loops
// Comparisons
// Login systems
// ==========================================================

let isLoggedIn = true;

let isAdmin = false;

console.log(isLoggedIn);

console.log(isAdmin);

console.log(typeof isLoggedIn);

// Output:
//
// boolean







// ==========================================================
// 5. UNDEFINED
// ==========================================================
//
// Variable declared
// but NOT assigned.
//
// JavaScript automatically
// gives it
//
// undefined
// ==========================================================

let city;

console.log(city);

console.log(typeof city);

// Output:
//
// undefined







// ==========================================================
// 6. NULL
// ==========================================================
//
// Means:
//
// Nothing
//
// Empty value
//
// Intentionally empty.
//
// Developer assigns null.
//
// IMPORTANT:
//
// typeof null
//
// returns
//
// object
//
// This is a historical bug
// in JavaScript.
// ==========================================================

let user = null;

console.log(user);

console.log(typeof user);

// Output:
//
// null
//
// object







// ==========================================================
// 7. SYMBOL
// ==========================================================
//
// Introduced in ES6.
//
// Every Symbol is unique.
//
// Mostly used internally
// or for unique object properties.
// ==========================================================

let id1 = Symbol("id");

let id2 = Symbol("id");

console.log(id1);

console.log(id2);

console.log(id1 === id2);

// Output:
//
// false

console.log(typeof id1);

// Output:
//
// symbol







// ==========================================================
// 8. OBJECT
// ==========================================================
//
// Object stores
// multiple values
// using key-value pairs.
//
// Everything complex
// in JavaScript
// is an Object.
//
// Arrays
// Functions
// Dates
// Maps
//
// all are Objects.
// ==========================================================

let person = {

    name: "John",

    age: 25,

    city: "Mumbai"

};

console.log(person);

console.log(typeof person);

// Output:
//
// object