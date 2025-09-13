/*
// Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

// Exercise
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
console.log(percentageOfWorld1(1441));

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
console.log(percentageOfWorld1(100));
