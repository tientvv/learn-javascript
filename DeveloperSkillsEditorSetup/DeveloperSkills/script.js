'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmlitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];
    if (typeof curtemp !== 'number') continue;

    if (max < temps[i]) max = temps[i];
    if (min > temps[i]) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmlitude([1, 2, 3], [-1, -2]);
console.log(amplitude);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2));
