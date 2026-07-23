/* const useremail = "de.ai";
if (useremail) {
    console.log("got email")
}
else {
    console.log("email not found")
}

// truthy and falsy values
// falsy values are 0 , -0 , "" , 0n , null , undefined , false , NaN , ""
// truthy values are all other values except falsy values
// surprised truthy values are "0" , "false" , [] , {} , function(){} , " " , -1 , 1 , Infinity , -Infinity
if (useremail.length==0){ 
    console.log("email is empty")
}

const emptyobject = {}
if(Object.keys(emptyobject).length==0){
    console.log("object is empty")
}


 */

let username = "devanshu"
if(username){
    console.log("truthy ");
    
}
else{
    console.log("fasly");
    
}
let arr = []
if(arr.length==0){
    console.log("the cart is empty");
    
}
else{
    console.log("the car is full");
    
}
let i ={
  firstname : "deva" ,
  lastname : "lich"  ,
  username :  "" ,
}
if (!i.username){
    console.log("the value is empty ");
    
}
console.log(Boolean("false"));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(null));