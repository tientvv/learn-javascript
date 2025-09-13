const calcAverage = (scoreTime1, scoreTime2, scroreTime3) => (scoreTime1 + scoreTime2 + scroreTime3) / 3;

const avgDolhins = (scoreTime1, scoreTime2, scroreTime3) => calcAverage(scoreTime1, scoreTime2, scroreTime3);

const avgKoalas = (scoreTime1, scoreTime2, scroreTime3) => calcAverage(scoreTime1, scoreTime2, scroreTime3);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log('Dolphins win');
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log('Koalas win');
  } else {
    console.log('No team wins');
  }
};

console.log(avgDolhins(44, 23, 71), avgKoalas(65, 54, 49));

let scroreDolphins = avgDolhins(44, 23, 71);
let scroreKoalas = avgKoalas(65, 54, 49);

// Test 2
scroreDolphins = avgDolhins(85, 54, 41);
scroreKoalas = avgKoalas(23, 34, 27);
console.log(scroreDolphins, scroreKoalas);

checkWinner(scroreDolphins, scroreKoalas);
