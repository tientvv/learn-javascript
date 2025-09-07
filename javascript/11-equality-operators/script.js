/*
const age = '18';
if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You just became an adult (loose)');

let favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}
*/
const numNeighbours = Boolean(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours == 1) console.log('Only 1 border!');
else if (numNeighbours > 1) console.log('More than 1 border!');
else console.log('No borders!');

/*
  Why we should use the === operator and type conversion in this situation?
  Theo cách hiểu:
  - === nó sẽ là so sánh cả dữ liệu và kiểu dữ liệu vd: '18' === 18 => fase
  - == chỉ so sánh dữ liệu '18' == 18 => true
*/
