// ============================================================
// JAVASCRIPT VARIABLES
// Complete Guide
// ============================================================

// A variable is a container used to store data.
//
// Think of it like a box.
//
// Example:
//
// Box Name : age
// Value    : 21
//
// age = 21
//
// Later you can change the value (except const).



// ============================================================
// 1. var
// ============================================================
//
// Introduced:
// JavaScript (1995)
//
// Scope:
// Function Scope
//
// Can be Redeclared?
// YES
//
// Can be Reassigned?
// YES
//
// Hoisted?
// YES (initialized with undefined)
//
// Modern JavaScript:
// Mostly avoid using var.
// Use let or const instead.
// ============================================================

var city = "Mumbai";

console.log(city);

// Output:
// Mumbai

// Reassigning

city = "Pune";

console.log(city);

// Output:
// Pune

// Redeclaring

var city = "Nagpur";

console.log(city);

// Output:
// Nagpur





// ============================================================
// var is Function Scoped
// ============================================================

function demoVar() {

    var message = "Hello";

    console.log(message);

}

demoVar();

// Output:
// Hello

// console.log(message);

// ERROR
//
// message only exists
// inside the function.





// ============================================================
// var ignores block scope
// ============================================================

if (true) {

    var language = "JavaScript";

}

console.log(language);

// Output:
// JavaScript

// Even though it was declared
// inside the if block,
// var ignores block scope.







// ============================================================
// 2. let
// ============================================================
//
// Introduced:
// ES6 (2015)
//
// Scope:
// Block Scope
//
// Redeclare?
// NO
//
// Reassign?
// YES
//
// Hoisted?
// YES
//
// But cannot be used before declaration
// because of the
// Temporal Dead Zone (TDZ).
// ============================================================

let age = 21;

console.log(age);

// Output:
// 21

// Reassign

age = 22;

console.log(age);

// Output:
// 22

// Cannot Redeclare

// let age = 25;

// ERROR







// ============================================================
// let uses Block Scope
// ============================================================

if (true) {

    let marks = 95;

    console.log(marks);

}

// Output:
// 95

// console.log(marks);

// ERROR

// marks only exists
// inside the block.







// ============================================================
// 3. const
// ============================================================
//
// Introduced:
// ES6 (2015)
//
// Scope:
// Block Scope
//
// Redeclare?
// NO
//
// Reassign?
// NO
//
// Must initialize immediately.
//
// Best choice for values
// that should never change.
// ============================================================

const PI = 3.14159;

console.log(PI);

// Output:
// 3.14159

// PI = 5;

// ERROR
//
// Assignment to constant variable.







// ============================================================
// const with Objects
// ============================================================
//
// const protects the VARIABLE.
//
// It DOES NOT protect
// the object itself.
// ============================================================

const person = {

    name: "John",
    age: 25

};

console.log(person);

// Change property

person.age = 30;

console.log(person);

// Output:
//
// age becomes 30

// Allowed because
// object itself is mutable.







// ============================================================
// const with Arrays
// ============================================================

const numbers = [10,20,30];

numbers.push(40);

console.log(numbers);

// Output:
//
// [10,20,30,40]

// Allowed.


// numbers = [1,2,3];

// ERROR







// ============================================================
// Global Variable
// ============================================================
//
// Declared outside every function.
//
// Can be accessed
// almost anywhere.
// ============================================================

let company = "Google";

function showCompany(){

    console.log(company);

}

showCompany();

console.log(company);

// Output:
//
// Google
// Google







// ============================================================
// Local Variable
// ============================================================
//
// Exists only
// inside a function.
// ============================================================

function displayName(){

    let username = "Alex";

    console.log(username);

}

displayName();

// console.log(username);

// ERROR







// ============================================================
// Block Variable
// ============================================================
//
// let and const
// belong to the block.
//
// A block means:
//
// {
//
// }
// ============================================================

{

    let x = 10;

    const y = 20;

    console.log(x);

    console.log(y);

}

// console.log(x);

// ERROR

// console.log(y);

// ERROR







// ============================================================
// Variable Shadowing
// ============================================================
//
// Inner variable
// hides outer variable.
// ============================================================

let country = "India";

{

    let country = "Japan";

    console.log(country);

}

// Output:
// Japan

console.log(country);

// Output:
// India







// ============================================================
// Hoisting
// ============================================================
//
// JavaScript moves declarations
// to the top internally.
//
// Different variables
// behave differently.
// ============================================================


// ---------- var ----------

console.log(a);

var a = 10;

// Output:
//
// undefined
//
// because:
//
// var a;
//
// console.log(a);
//
// a = 10;







// ---------- let ----------

// console.log(b);

// ERROR

let b = 20;







// ---------- const ----------

// console.log(c);

// ERROR

const c = 30;







// ============================================================
// Multiple Variable Declaration
// ============================================================

let firstName = "John",
    lastName = "Doe",
    age2 = 25;

console.log(firstName);
console.log(lastName);
console.log(age2);







// ============================================================
// Variable Naming Rules
// ============================================================

// Valid

let studentName;
let user123;
let _price;
let $salary;
let camelCase;

// Invalid

// let 123name;
// let user-name;
// let let;
// let first name;







// ============================================================
// Best Practices
// ============================================================

// Use const by default

const appName = "Netflix";


// Use let when value changes

let score = 0;

score++;


// Avoid var

// var count = 10;



const fruits = ["Apple", "Banana"];

console.log(typeof fruits);
console.log(Array.isArray(fruits));



// ============================================================
// Summary
// ============================================================
//
//                var      let      const
//
// Scope          Function Block    Block
//
// Redeclare      Yes      No       No
//
// Reassign       Yes      Yes      No
//
// Hoisted        Yes      Yes      Yes
//
// Before Declare undefined ERROR   ERROR
//
// Modern Use     Avoid    Good     Best
//
// Introduced     1995     2015     2015
// ============================================================