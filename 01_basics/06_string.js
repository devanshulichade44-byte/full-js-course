const name = "John Doe";
const repocount = 42;
console.log(name + " has " + repocount + " repositories");
// alternative way using backticks and template literals
console.log(`${name} has ${repocount} repositories`);

const gameName = new String("Call of Duty");
console.log(gameName);
// another way to create a string using the String constructor or how string is created in the background
console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));
// task atleast read every method of string
const newstring = gameName.substring(0, 4);
console.log(newstring);
const anotherstring = gameName.slice(0, 4);
console.log(anotherstring);

const newstring1= "   Hello World   ";
console.log(newstring1.trim()); 
const url = "https://www.%20google.com";
console.log(url.replace("%20", " "));



