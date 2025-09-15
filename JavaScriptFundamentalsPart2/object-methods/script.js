const tien = {
  firstName: 'Tien',
  lastName: 'Tran',
  birthYear: 2004,
  job: 'software engineer',
  friends: ['Loc', 'Phu', 'Duc'],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2025 - birthYear;
  // },

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${this.job}, and he ${
      this.hasDriversLicense ? 'a' : 'no'
    } a driver's license`;
  },
};

console.log(tien.calcAge());
console.log(tien.age);
console.log(tien.age);
console.log(tien.age);
// console.log(tien['calcAge'](2004));

// Chanllenge
console.log(tien.getSummary());
