/* const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}

const name = "Dev";

for (const letter of name) {
    console.log(letter);
}

const arr = [10,20,30];

for (const value of arr) {
    console.log(value);
}
const user = {
    name: "Devanshu",
    age: 21,
    city: "Pune"
};

for (const key in user) {
    console.log(key);
} */
/* const fruits = ["Apple", "Banana", "Mango"];
for(const o of  fruits){
    if(o==="Mango"){
        console.log(`${o} founded it `)
        break;
    }
    console.log(`${o}rest of it `)
}

const ma= "devandshub "
for(const m of ma  ){
    if(m!=="s"){
        continue;
    }
    console.log(m)
}

const user = {
    name: "Alex",
    age: 25,
    role: "Developer"
};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
 */
/* const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index, array) => {
    console.log(fruit, index, array);
}); */


/// array methods
/* 
const marks = [40, 50, 60];

const newMarks = marks.map((mark) => {
    return mark + 5;
});

console.log(newMarks);
const fruits = ["Apple", "Banana", "Mango"];

const newName = fruits.map((fruits)=>{
    return fruits+"nice"
})
console.log(newName); */
/* const marks = [40, 50, 60];

const newMarks = marks.map((mark) => {
    return mark + 5;
});

console.log(newMarks);
 */
const numbers=[1,2,3,4,5,6];
const even=numbers.filter((num)=>{

    return num%2===0;

});

console.log(even);

const products=[

    {name:"Phone",price:30000},
    {name:"Mouse",price:700},
    {name:"Laptop",price:70000}

];

const expensive=products.filter((product)=>{

    return product.price>10000;

});

console.log(expensive);
const users = [
    {id:1, name:"John"},
    {id:2, name:"Alice"},
    {id:3, name:"Bob"}
];
/* let result;

for (let i = 0; i < users.length; i++) {
    if (users[i].id === 2) {
        result = users[i];
        break;
    }
}

console.log(result); */
const result = users.find((user) => {
    return user.id === 2;
});

console.log(result);
