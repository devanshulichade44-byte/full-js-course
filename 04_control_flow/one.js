const isuserloggedin = true;
if (isuserloggedin) {
  console.log("User is logged in");
}

if (2!=3){
    console.log("excuted")
}
//< ,> , <= , >= , == , === , != , !==
const score = 200 ;
if(score>100){
    let power = "fly"
    console.log(`user power is he can ${power}`)
}
 const balance = 1050 ; 
if (balance>500) console.log("test") // if shorthand dont use it  it is a bad paratice in job environment settings
 if(balance <500) {
    console.log("balance is less than 500")
 }
 else if(balance<650){
    console.log("balance is between 500 and 650")

 }
 else if(balance<750){
    console.log("balance is between 650 and 750")
 }
 else{
    console.log("balance is greater than 1000")
 }
 const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// nullish coalescing operator(??)
const val1 = null ?? 10
const val2 = undefined ?? 20
const val3 = 0 ?? 30
const val4 = "" ?? 40
const val5 = false ?? 50``
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)
// ternary operator
const iceteaprice = 100
iceteaprice<=50 ? console.log("ice tea is expensive") : console.log("ice tea is cheap")