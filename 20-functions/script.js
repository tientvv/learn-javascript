/*
function logger() {
  console.log('My name is Tien');
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// Exercise
function describeCountry(country, population, capitalCity) {
  const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  console.log(describe);
}
const descVietnam = describeCountry('Vietnam', 100, 'Hanoi');
console.log(descVietnam);
