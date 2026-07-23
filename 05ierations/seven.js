/* for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }

}


for (let i = 1; i <= 20; i++) {

    for (let j = 1; j <= 10; j++) {

        console.log(`${i} × ${j} = ${i * j}`);

    }

}
for (let i = 1; i <= 5; i++) {

    let row = "";

    for (let j = 1; j <= 5; j++) {
        row += "* ";
    }

    console.log(row);

} */
/* for (let i = 1; i <= 5; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);

} */
/* const students = ["john" , "Alice"]
const subjects = ["Math" , "Science"]
for(i=0;i<students.length;i++){
    for(j=0;j<subjects.length;j++){
        console.log(`${students[i]} studies ${subjects[i]}`);
        
    }
}
 */
/* const fruits = ["Apple", "Banana", "Mango", "Orange"];

for(let i = 0 ; i<fruits.length;i++){
    console.log(fruits[i])
}
 */
/* const numbers = [10, 20, 30, 40];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum); */
const numbers = [25, 10, 80, 45, 60];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }

}

console.log(largest);
