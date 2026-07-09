const marvelheros = ["thor", "ironman", "spiderman", "hulk", "captain america"];
const dcHeros = ["batman", "superman", "wonder woman", "flash", "aquaman"];
 //marvelheros.push(dcHeros );
//console.log(marvelheros , "push result");
//console.log(marvelheros[5][1]);
  //const allHeros = marvelheros.concat(dcHeros );
 //console.log(allHeros, "concat result");
 //spread operator
const allHeros = [...marvelheros, ...dcHeros];
console.log(allHeros, "spread result");
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({ name: "hitesh" })) // interesting
let score = 100 
let score2 = 200
const score_array = Array.of(score, score2)
console.log(score_array)