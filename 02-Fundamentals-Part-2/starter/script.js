"use strict";
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins won ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`koalas won ${avgKoalas} vs ${avgKoalas}`);
//   } else {
//     console.log(`no team wins`);
//   }
// }

// checkWinner(avgDolphins, avgKoalas);

// const tip = 0;
// const calcTip =function(bill){
//     if (bill <= 300 && bill >= 50 ){

//         console.log(`tip is  ${bill*0.15}`);
//     }else {
//aconsole.log(`tip is  ${bill*0.2}`);
//     }
// }

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]), calcTip(bills[1],calcTip(bills[2]))];

// object methods
// intersection of an object
// const jonas ={
//     firstName: 'John',
//     lastName: 'schmedtmann',
//     birthYear: 1997,
//     job : 'teacher',
//     hasDriversLicense: false,

// calcAge: function () {// function expression
//     return 2037 - this.birthYear;// using this method to call birth year fom the object.
// }
// calculating age and storing it back to the object
//

// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// console.log(John.BMI);
// const Mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// console.log(
//   `${John.calcBMI > Mark.calcBMI} ? ${John.fullName}"BMI"${
//     John.BMI
//   } "is higher than"${Mark.fullName} ${Mark.BMI}"!" : ${Mark.fullNamee}"BMI"${
//     Mark.BMI
//   } "is higher than"${John.fullName} ${John.BMI}"!"`
// );
// for loops
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`this is rep ${rep}`)
// };
// const anuj = [
//     'anuj', 'mishra',2021-1997,'student',true
// ];
// const type = [];
// for(let i = 0; i < anuj.length; i++) {
//     console.log(`${anuj[i]}`);
//     type[i] = typeof anuj[i];
// };
// console.log(type);


// codding challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52 ]
const tips = [];
const total = [];
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}
console.log(total,tips,bills);
const calcAge = function (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/ arr.length;
}
console.log(calcAge(total));