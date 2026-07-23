/* /* let i = 6;        // Initialization

while (i <= 5) {  // Condition

    console.log(i);

    i++;          // Update
}



let o = 1 ;
while(o<=10){
    console.log(o)
    o++;
}
let m = 0
while(m<=10){
 const number = 9; */
/*  const number = 9
let i = 1;

while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
} */ 



// do-while 
/* let i = 10;

do {
    console.log(i);
} while (i < 5);
 */
/* let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 3);
 */
/* for(let i = 0 ;i<=10;i++){
 if(i===5){
    break
 }
 console.log(i);
 
} */

/* let i = 1;

while (i <= 10) {
    if (i === 6) {
        break;
    }

    console.log(i);
    i++;
}
const users = ["alice", "bob", "john"];

for (let i = 0; i < users.length; i++) {
    if (users[i] === "bob") {
        console.log(i);
    } // <-- The if block ENDS here!
    
    console.log("found it "); // <-- This is OUTSIDE the if statement!
} */
const users = ["alice", "bob", "john"];

for (let i = 0; i < users.length; i++) {
    if (users[i] === "bob") {
        console.log(users[i]);     // Prints "bob"
        console.log("found it ");  // Prints "found it "
    }
}
const users = [
    { name: "John", active: true },
    { name: "Alice", active: false },
    { name: "Bob", active: true }
];

for (let i = 0; i < users.length; i++) {

    if (!users[i].active) {
        continue;
    }

    console.log(users[i].name);
}
















