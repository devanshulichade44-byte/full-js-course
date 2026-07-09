 
 const mysym = Symbol("key1");
 const jsuser = {
    name : "hitesh",
    age :18 ,
    location : "delhi",
    email :"hitesh@.com",
    isloggedin : true,
    [mysym] : "mykey1"
 }
console.log(jsuser.name);
console.log(jsuser["age"]);
console.log( typeof jsuser[mysym]);
jsuser.greeting = function(){
    console.log("hello user");
}
console.log(jsuser.greeting());
jsuser.greeting2 = function(){
    return `hello ${this.name} your age is ${this.age}`;
}
console.log(jsuser.greeting2());