/*
const jonas = ['Tien', 'Tran', 2025 - 2004, 'software engineer', ['Peter', 'John', 'Steven'], true];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}
console.log(age);

// countinue and break
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
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
