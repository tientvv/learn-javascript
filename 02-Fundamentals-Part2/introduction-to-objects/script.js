const tientvvArray = ['Tien', 'Tran', 2037 - 1991, 'student', ['Michael', 'Peter', 'Steven']];

const tien = {
  firstName: 'Tien',
  lastName: 'Tran',
  age: 2025 - 2004,
  job: 'software engineer',
  friends: ['Loc', 'Phu', 'Duc'],
};

console.log(tien.lastName);
console.log(tien['lastName']);

const nameKey = 'Name';
console.log(tien['first' + nameKey]);
console.log(tien['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Tien? Choose between firstName, lastName, age, job, friends'
);
console.log(interestedIn);

if (tien[interestedIn]) {
  console.log(tien[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, friends');
}

tien.location = 'Vietnam';
tien['twitter'] = '@tientvv';
console.log(tien);
