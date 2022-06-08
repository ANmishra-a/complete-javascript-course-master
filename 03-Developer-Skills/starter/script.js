// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// const temp1 = [23, 65, 89, 9, 87, "anuj", 17, 35];
// const temp2 = [24, 65, 87, 36, 19, 78, 35];
// const temp3 = temp1.concat(temp2);

// const amplitude = function (temperature) {
//   let max = temperature[0];
//   let min = temperature[0];
//   for (let i = 0; i < temperature.length; i++) {
//     if (typeof temperature[i] !== "number") continue;
//     if (temperature[i] > max) {
//       max = temperature[i];
//     }
//     if (temperature[i] < min) {
//       min = temperature[i];
//     }
//   }
//   return [max, min];
// };
// const [bada, chhota] = amplitude(temp3);
// // let min = amplitude(temp3);
// console.log(bada, chhota);
let day = 0;
let i = 0;
const printForecast = function (arr) {
  for (let day = 0; day < arr.length; day++)
    console.log(`... ${arr[0]}ºC in ${[i] + 1}
  days ... ${arr[1]}ºC in ${[i] + 2}  days ... ${arr[2]}ºC in 3 days ...`);
};
printForecast([17, 21, 23]);

// const temp1 = [23, 65, 89, 9, 87, "anuj", 17, 35, "atul", "Rashmi"];

// const separate = function (array) {
//   let numerics = [];
//   let names = [];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] !== "number") {
//       names.push(array[i]);
//     } else {
//       numerics.push(array[i]);
//     }
//   }
//   return [numerics, names];
// };
// const [numerics, names] = separate(temp1);
// console.log(numerics);
// console.log(names);
//string to number
// const BASE_VALUE = 96;
// function findPosition(text) {
//   let result = [];
//   text = text.toLowerCase();
//   for (let i = 0; i < text.length; i++) {
//     let asciiVal = text[i].charCodeAt(0) - BASE_VALUE;
//     if (asciiVal > BASE_VALUE) {
//       result.push(asciiVal);
//     }
//   }
//   return result;
// }
// const text =
//   "Download the Node.js source code or a pre-built installer for your platform, and start developing today.";
// console.log(findPosition(text));

// Count the number of Duplicates
let count;
const duplicate = function (count) {};
