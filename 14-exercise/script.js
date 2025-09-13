const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log(`Dolsphins win the trophy 🏆`);
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
  console.log(`Koalas win the trophy 🏆`);
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
  console.log(`Both win the trophy 🏆`);
} else {
  console.log(`No one wins the trophy 🥲`);
}
