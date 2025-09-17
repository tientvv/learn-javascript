const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [];
const total = [];

let i = 0;
while (i < bills.length) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  console.log(tip);
  total.push(tip + bills[i]);
  i++;
}

console.log(tips, bills, total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(total));
