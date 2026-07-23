/* const user = {
    name: "Devanshu",
    greet: () => {
        console.log(this.name);
    }
};

user.greet();

const heelo = () => {
    console.log("hellllllooooooooooo");
};
heelo();

const add = (a, b) => {
    return `the addition of the number is ${a + b}`;
};
console.log(add(10, 5));

const getCircleArea = (radius) => Math.PI * radius * radius;
console.log(getCircleArea(5));

const isEven = (num) => num % 2 === 0;
console.log(isEven(4));
console.log(isEven(7));

const getMax = (a, b) => (a > b ? a : b);
console.log(getMax(12, 25));

const createUser = (name, age) => ({ name: name, age: age });
console.log(createUser("Devanshu", 24));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const nums = [1, 2, 3, 4, 5];
const squared = nums.map((num) => num ** 2);
console.log(squared);

function print(value) {

    console.log(value);

}

print(100);
print("Hello");
print(true);
print([1,2,3]);
print({name:"Devanshu"});



function introduce(name = "Guest", age = 18) {
    console.log(name);
    console.log(age);
}

introduce();


function greet(name = "Guest") {
    console.log(name);
}

greet(undefined);



function add(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(add(5, 10));             // Output: 15
console.log(add(1, 2, 3, 4, 5, 6)); // Output: 21
console.log(add());                  // Output: 0 */


/* // Step 1: Define the function factory
function multiply(multiplier) {
    // When called, multiply returns this ENTIRE function below
    return function(number) {
        return number * multiplier;
    };
}

// Step 2: Pass '2' into multiply
// 'multiplier' becomes 2
// 'double' is assigned the inner function: function(number) { return number * 2; }
const double = multiply(2);

// Step 3: Pass '5' into double
// Since 'double' IS function(number), calling double(5) sets 'number = 5'
console.log(double(5)); // 5 * 2 = 10


// iife 
(function(){

    let name = "Devanshu";

    console.log(name);

})();

console.log(typeof name);
(( age)=>{
    let name = "Devanshu";

    console.log(name , age);
}) (18 ) */

 //DOM Manipulation




// 1. Select the element with id="title"
const titleElement = document.getElementById('title');

// 2. Change its text
titleElement.textContent = 'Hello, World!';

// 3. Change its color
titleElement.style.color = '#2563eb';

// 4. Select a paragraph (selects the first <p> element on the page)
const paragraph = document.querySelector('p');

// 5. Print the paragraph's text to the browser console
console.log(paragraph.textContent);

// 6. Change the background color of the page
document.body.style.backgroundColor = '#f3f4f6';

















