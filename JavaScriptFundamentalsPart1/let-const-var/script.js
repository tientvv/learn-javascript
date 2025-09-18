// 1. let - for variables that can change (mutable)
let age = 30;
age = 31; // Reassigning is allowed

// 2. const - for variables that shouldn't change (immutable)
const birthYear = 2004;
// birthYear = 2003; // Error! Cannot reassign
// const job; // Error! Must be initialized

// 3. var - old way of defining variables (avoid using)
var job = 'programmer';
job = 'software engineer'; // Reassigning is allowed

lastName = 'Tran';
console.log(lastName); // Can be reassigned like let

// Exercise 2
let language;
language = 'Vietnamese';
const country = 'Vietnam';
const continent = 'Asia';
const population = 100;
const isIsland = true;

console.log(typeof language);
console.log(continent);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
