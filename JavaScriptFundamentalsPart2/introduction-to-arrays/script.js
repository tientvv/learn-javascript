/*
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends[2]);
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

for (let index = 0; index < years.length; index++) {
  console.log(`1 - ${index} - ${years[index]}`);
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
*/

// Exercise
const populations = [1441, 100, 33, 30];

console.log(populations.length === 4);

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

if (friends.includes('Peter')) {
  console.log('You have a friend called Peter!');
}
