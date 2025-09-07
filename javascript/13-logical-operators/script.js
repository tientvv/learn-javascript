/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDriver = hasDriversLicense && hasGoodVision;
if (shouldDriver) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive...');
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);
*/

const country = 'England';
const languages = 'english';
const population = '30';
const isIsland = false;

if (languages === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else console.log(`${country} does not meet your criteria :(`);
