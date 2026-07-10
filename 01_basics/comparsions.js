// ============================================================
// JAVASCRIPT COMPARISON OPERATORS
// ============================================================
// Comparison operators compare two values.
// The result of every comparison is always:
// true  -> comparison is correct
// false -> comparison is not correct
//
// Example:
// 10 > 5   -> true
// 10 < 5   -> false
// ============================================================



// ============================================================
// 1. EQUAL TO (==)
// ============================================================
// Syntax:
// value1 == value2
//
// This is called "Loose Equality".
//
// JavaScript checks whether the VALUES are equal.
// If the DATA TYPES are different,
// JavaScript first converts them to the same type
// (called Type Coercion) and then compares them.
//
// Because JavaScript converts types automatically,
// == can sometimes produce unexpected results.
// Therefore, it is usually NOT recommended.
// ============================================================

let number = 5;
let string = "5";

console.log(number == string);

// Output:
// true

// Why?
//
// number is Number datatype
// string is String datatype
//
// JavaScript automatically converts
// "5" into number 5.
//
// So it actually compares:
//
// 5 == 5
//
// Result:
// true





// ============================================================
// 2. STRICT EQUAL (===)
// ============================================================
// Syntax:
// value1 === value2
//
// This is called "Strict Equality".
//
// JavaScript compares BOTH:
//
// 1. Value
// 2. Data Type
//
// If either one is different,
// result becomes false.
//
// This is the operator you should use
// most of the time.
// ============================================================

let age = 18;
let ageString = "18";

console.log(age === ageString);

// Output:
// false

// Why?
//
// Value:
// 18 == 18
//
// BUT
//
// Data Types:
//
// age -> Number
// ageString -> String
//
// Types are different.
//
// Therefore:
//
// false





// ============================================================
// 3. NOT EQUAL (!=)
// ============================================================
// Syntax:
// value1 != value2
//
// Opposite of ==
//
// JavaScript again converts datatypes
// before comparing.
// ============================================================

let marks = 90;
let marksString = "90";

console.log(marks != marksString);

// Output:
// false

// Why?
//
// JavaScript converts
//
// "90"
//
// into
//
// 90
//
// Then compares:
//
// 90 != 90
//
// Which is:
//
// false





// ============================================================
// 4. STRICT NOT EQUAL (!==)
// ============================================================
// Syntax:
// value1 !== value2
//
// Opposite of ===
//
// Checks:
//
// Value
// AND
// Data Type
//
// If either differs,
// result becomes true.
// ============================================================

let id = 101;
let idString = "101";

console.log(id !== idString);

// Output:
// true

// Why?
//
// Value:
// Same
//
// Type:
// Number
// String
//
// Types differ.
//
// Therefore:
//
// true





// ============================================================
// 5. GREATER THAN (>)
// ============================================================
// Syntax:
// value1 > value2
//
// Checks whether left value
// is larger than right value.
// ============================================================

let salary = 60000;
let requiredSalary = 50000;

console.log(salary > requiredSalary);

// Output:
// true

// Because:
//
// 60000 is greater than 50000





// ============================================================
// 6. LESS THAN (<)
// ============================================================
// Syntax:
// value1 < value2
//
// Checks whether left value
// is smaller than right value.
// ============================================================

let temperature = 22;
let boilingPoint = 100;

console.log(temperature < boilingPoint);

// Output:
// true

// Because:
//
// 22 is smaller than 100





// ============================================================
// 7. GREATER THAN OR EQUAL (>=)
// ============================================================
// Syntax:
// value1 >= value2
//
// Result becomes true if:
//
// value1 is greater
//
// OR
//
// both are exactly equal.
// ============================================================

let score = 80;
let passingMarks = 80;

console.log(score >= passingMarks);

// Output:
// true

// Why?
//
// score is NOT greater
//
// BUT
//
// score equals passingMarks.
//
// Equal is allowed.
//
// Therefore:
//
// true





// ============================================================
// 8. LESS THAN OR EQUAL (<=)
// ============================================================
// Syntax:
// value1 <= value2
//
// Result becomes true if:
//
// value1 is smaller
//
// OR
//
// exactly equal.
// ============================================================

let speed = 60;
let speedLimit = 80;

console.log(speed <= speedLimit);

// Output:
// true

// Because:
//
// 60 is less than 80.





// ============================================================
// STRING COMPARISON
// ============================================================
//
// JavaScript compares strings
// alphabetically using Unicode values.
//
// It compares character by character.
//
// Example:
//
// Apple
// Banana
//
// First character:
//
// A
// B
//
// Since A comes before B,
// "Apple" is considered smaller.
// ============================================================

console.log("Apple" < "Banana");

// Output:
// true





// ============================================================
// BOOLEAN COMPARISON
// ============================================================
//
// true becomes 1
//
// false becomes 0
// ============================================================

console.log(true > false);

// true becomes 1
//
// false becomes 0
//
// 1 > 0
//
// true





// ============================================================
// NULL VS UNDEFINED
// ============================================================
//
// This is one of the most famous interview questions.
// ============================================================

console.log(null == undefined);

// true
//
// Because loose equality
// treats them as equal.


console.log(null === undefined);

// false
//
// Because:
//
// null datatype
//
// undefined datatype
//
// Types differ.





// ============================================================
// NaN
// ============================================================
//
// NaN means:
//
// Not a Number
//
// Surprisingly:
//
// NaN is NOT equal
// to itself.
// ============================================================

console.log(NaN == NaN);

// false

console.log(NaN === NaN);

// false

console.log(Number.isNaN(NaN));

// true
//
// Correct way to check NaN.





// ============================================================
// OBJECT COMPARISON
// ============================================================
//
// Objects are compared by MEMORY ADDRESS.
//
// Not by their contents.
// ============================================================

let person1 = {
    name: "John"
};

let person2 = {
    name: "John"
};

console.log(person1 == person2);

// false

// Why?
//
// Different objects.
//
// Stored at different
// memory locations.


// Same reference

let person3 = person1;

console.log(person1 === person3);

// true

// Both variables point
// to the same object
// in memory.





// ============================================================
// ARRAY COMPARISON
// ============================================================
//
// Arrays are also objects.
//
// Compared using
// memory address.
// ============================================================

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 == arr2);

// false

// Different arrays
// in different memory.

let arr3 = arr1;

console.log(arr1 === arr3);

// true





// ============================================================
// BEST PRACTICE
// ============================================================
//
// Always use:
//
// ===
//
// and
//
// !==
//
// unless you specifically
// need automatic type conversion.
//
// Modern JavaScript code
// almost always prefers:
//
// ===
// !==
//
// instead of
//
// ==
// !=
//
// because they are safer
// and avoid unexpected bugs.
// ============================================================