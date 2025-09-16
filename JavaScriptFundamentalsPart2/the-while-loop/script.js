/*
let rep = 1;
while (rep <= 10) {
  console.log(rep);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
*/

// Exercise
const percentageWOrld1 = function (population) {
  return (population / 7900) * 100;
};
const percentages2 = [];
const populations = [10, 1441, 332, 83];

for (let i = 0; i < populations.length; i++) {
  const percentageWOrld = percentageWOrld1(populations[i]);
  percentages2.push(percentageWOrld);
}

console.log(percentages2);

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageWOrld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
