/* const user ={
    nmae : "deick" ,
    age : 18,
}

const developer = {
  name: "Alex",
  role: "Frontend Engineer",
  skills: ["JavaScript", "React", "CSS"]
};


const car =  {
 brand : "volvo",
 model : "x90",
 price : "2.5 cr"

}
 */

/* const user = {
  skills:["html" ,"css" , "js"]
};
console.log(user.skills[0])

const u ={
  name : "devanshu",
  age : 21,
}
u.age=23 ; 
console.log(u);
delete u.age
console.log(u);
 */
 /* const student = {
  marks : 72 ,

 }
 student.marks=78 ;
 console.log(student);
 student.phnumber = 7758064571
 console.log(student);
 delete student.marks
 console.log(student)
// 1. Create an object containing another object
const person = {
  name: "Alex",
  address: {
    city: "Pune",
    state: "Maharashtra",
    pincode: "411001"
  },
  skills: ["JavaScript", "Python", "SQL"]
};

// 2. Print a nested city
console.log(person.address.city);

// 3. Update a nested state
person.address.state = "Karnataka";

// 4. Delete a nested pincode
delete person.address.pincode;

// 5. Print the first skill from an array inside an object
console.log(person.skills[0]);

// 6. Print the second employee's role
const company = {
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" }
  ]
};

console.log(company.employees[1].role);
*/


const user = {
    name: "Devanshu",
    age: 21,
    city: "Nagpur"
};

Object.keys(user).forEach((key) => {
    console.log(key);
});




const user1 = {
    name: "Devanshu",
    age: 21,
    city: "Nagpur"
};

console.log(Object.values(user1));

const user2 = {
    name: "Devanshu",
    age: 21
};

console.log(Object.entries(user2));
const user = {
    name: "Devanshu"
};

const copied = Object.assign({}, user);

console.log(copied);
const user = {
    name: "Devanshu"
};

Object.freeze(user);

user.name = "John";
user.age = 21;
delete user.name;

console.log(user);

// Function signature with destructured parameters, defaults, renaming, nested objects, and array destructuring
function processUser({
  name: userName,
  age = 18,
  address: { city } = {},
  skills: [firstSkill] = []
}) {
  return { userName, age, city, firstSkill };
}











