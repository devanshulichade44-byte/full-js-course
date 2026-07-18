// for of                     
     const arr = [1, 2, 3, 4, 5];
     for (const value of arr) {
         console.log(value);
     }                                                                                                                                                   
const greetings = "Hello, World!";
for (const greet of greetings) {
    console.log(greet);
}
// maps 
const map = new Map();
map.set("in" , "India");
map.set("us" , "United States");
map.set("uk" , "United Kingdom");
for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}