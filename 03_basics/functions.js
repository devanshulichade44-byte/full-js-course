function sayname(  ) {
    console.log("My name is John Doe");

}
sayname();
function addNumbers(num1, num2) {
    console.log(num1 + num2 );
}
addNumbers(4,5)

const result = addNumbers(10, 20);
function addnum(num1, num2) {
    return num1 + num2;
}
const sum = addnum(10, 20);
console.log(sum);
function loginusermessage(username = "Guest") {
    if (username === undefined) {
        return "Please provide a username";
    }
    else{
        return `Welcome ${username} to our website`
    }
}
const message = loginusermessage();
console.log(message);
function calculatecartprice(...num1){
 return  num1
}
console.log(calculatecartprice(100, 200, 300, 400, 500));
const user = {
    username: "John Doe",
    price: 100,
}
function handleobject(any){
    console.log(`Username is ${any.username} and Price: ${any.price}`);
}
handleobject(user);
const myNewArray = [1, 2, 3, 4, 5];
function handlearray(any){
    return any[1];
}
console.log(handlearray(myNewArray));