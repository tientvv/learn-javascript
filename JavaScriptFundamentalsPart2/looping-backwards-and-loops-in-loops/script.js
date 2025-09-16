/*
const jonas = ['Tien', 'Tran', 2025 - 2004, 'software engineer', ['Peter', 'John', 'Steven'], true];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
*/

// Exercise
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}
