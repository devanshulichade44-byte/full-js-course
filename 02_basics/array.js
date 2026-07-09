const myarr = [1, 2, 3, 4, 5];
const myheros = ["shatikman", "naagraj"];
const myarr2 = new Array(1, 2, 3, 4);

console.log(myarr[1]);

// Array methods
myarr.push(6);
myarr.pop();
myarr.unshift(9);

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));
const newarr = myarr.join()
console.log(myarr);
console.log(typeof(newarr))

// ------------------- slice() -------------------
const sliceArray = myarr.slice(1, 4);

console.log("slice(1, 4):", sliceArray);
console.log("Array after slice:", myarr);

// ------------------- splice() -------------------
const spliceArray = myarr.splice(1, 4);

console.log("splice(1, 4):", spliceArray);
console.log("Array after splice:", myarr);