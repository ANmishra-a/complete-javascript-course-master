'use strict';
// const flightBooking = function (
//   flightName = 'L$FA',
//   numPassengers = '1',
//   price = '10'
// ) {
//   console.log({ flightName, numPassengers, price });
// };
// flightBooking('LIKO', '12', '00');
// function arrayDiff(a, b) {
//   const arrayDiff = [];
//   if (a.length === 0) {
//     console.log(b);
//   } else if (a.length > 0) {
//     for (let i = 0; i < a.length; i++) {
//       let val = a[i];
//       b.forEach(element !== val ? arrayDiff.push(element) : null);
//     }
//   }

//   console.log(arrayDiff);
// }
// arrayDiff([6, 4], [4, 5]);

// function arrayDiff(a, b) {
//   console.log(...a);
// }
// arrayDiff([1, 2, 3], [2]);
// function frontDoorResponse(line) {
//   console.log(line.trim().slice(-1).toUpperCase());
// }
// frontDoorResponse('Sunshine warming my toe');
// function frontDoorPassword(word) {
//   console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());
// }
// frontDoorPassword('sunshine');
// function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
//   let numOfCycles = Math.floor(numDays / 22);
//   let discountDays = 22 * numOfCycles;
//   let nonDiscountDays = numDays - discountDays;

//   console.log(numOfCycles, nonDiscountDays, discountDays);
//   console.log(
//     Math.ceil(
//       ratePerHour * (discountDays * 8) * (1 - discount) +
//         ratePerHour * nonDiscountDays * 8
//     )
//   );
// }
// priceWithMonthlyDiscount(16, 130, 0.15);
// if (petDogIsPresent === true && archerIsAwake === false) {
//   return true;
// } else if (
//   petDogIsPresent === false &&
//   prisonerIsAwake === true &&
//   archerIsAwake === false &&
//   knightIsAwake === false
// ) {
//   return true;
// } else return false;
// const stack = [1, 2, 3];
// const position = 0;
// const replacement = 7;
// function setItem(cards, position, replacementCard) {
//   console.log((cards[position] = replacementCard));
//   console.log(stack);
// }
// // setItem(stack, position, replacement);
// function removeItemFromTop(cards) {
//   cards.shift();
//   console.log(cards);
// }
// removeItemFromTop([1, 2, 3]);
// function chooseVehicle(option1, option2) {
//   const arr = [];
//   arr.push(option1);
//   arr.push(option2);
//   console.log(arr);
//   arr.sort();
//   console.log(`${arr[0]} is clearly the better choice.`);
// }
// chooseVehicle('baz', 'bby');
// function needsLicense(kind) {
//   if (kind === 'car' || kind === 'truck') {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// // needsLicense('truck');
// ["Banana", "Orange", "Apple", "Mango"]
// function chooseVehicle()
// function totalBirdCount(birdsPerDay) {
//   let sum = 0;
//   for (let i = 0; i < birdsPerDay.length; i++) {
//     sum += birdsPerDay[i];
//   }
//   console.log(sum);
// }
// totalBirdCount([9, 0, 8, 4, 5, 1, 3]);
// function birdsInWeek(birdsPerDay, week) {
//   let sum = 0;
//   let start = week * 7;
//   let end = start - 7;
//   // console.log(start, end);

// birdsInWeek([3, 0, 5, 1, 0, 4, 1, 15, 8, 3, 4, 5, 6, 7], 2);
// function fixBirdCountLog(birdsPerDay) {
//   let arr = [];
//   for (let i = 0; i <= birdsPerDay.length; i++) {
//     if (i % 2 === 0) {
//       arr.push(birdsPerDay[i] + 1);
//     } else {
//       arr.push(birdsPerDay[i]);
//     }
//   }
//   console.log(arr);
// }

// fixBirdCountLog([3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0]);
// function titleCase(str) {
//   let strArr = str.split(' ');
//   for (let i = 0; i < strArr.length; i++) {
//     // strArr[i].toLowerCase();
//     // strArr[i][0].toUpperCase();
//     strArr[i][0] === strArr[i][0].toUpperCase();
//     console.log(strArr[i][0]);
//   }
// }

// titleCase("I'm a little tea pot");
// function betterThanAverage(classPoints, yourPoints) {
//   let total = 0;
// for (let i = 0; i <= classPoints.length; i++) {
//   total += classPoints[i];
//   if ((i = classPoints.length)) {
//     console.log(total / classPoints.length, total, classPoints.length);
//     console.log(total / classPoints.length > yourPoints);
//   }
// }
//   for (let num of classPoints) {
//     total += num;
//     console.log(total);
//   }
//   console.log(
//     total / classPoints.length < yourPoints,
//     total / classPoints.length
//   );
// }
// betterThanAverage([40, 34, 57, 29, 72, 57, 88], 75)
// function minMax(arr) {
//   let shorted = arr.sort((a, b) => a - b);

//   console.log([shorted[0], shorted[arr.length - 1]]); // fix me!
// }
// console.log(2334454 < 5);
// minMax([2334454, 5]);
// const oneWord = function (str) {
//   console.log(str.replace(/ /g, '').toUpperCase());
// };
// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   console.log([first.toUpperCase(), ...other].join(' '));
// };
// oneWord('my name is anuj');
// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       console.log(i);
//       return i;
//     } else if (arr[i] > num) {
//       console.log(i);
//       return i;
//     } else if (num > arr[i]) {
//       continue;
//       console.log(arr.length);
//       return arr.length;
//     }
//   }
// }

// getIndexToIns([10, 20, 30, 40, 50], 35);
// vb;
// DNAtoRNA('uacetwtst');
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };
// // higher order function
// const transformer = function (str, fun) {
//   console.log(`original string: ${str}`);
//   console.log(`Transformed string: ${fun(str)}`);
// };
// transformer('javascript is the same as typescript', upperFirstWord);
// transformer('javascript is the same as typescript', oneWord);
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hello');
// greeterHey('john');
// greeterHey('anuj');
// const flight = {
//   airLine: 'Indian air',
//   yatraCode: 'IA',
//   booking: [],
// };

// const flight2 = {
//   airLine: 'kingFisher',
//   yatraCode: 'KF',
//   booking: [],
// };

// const book = function (name, age) {
//   console.log(
//     `${name}  ${age} has booked a seat in ${this.airLine} and the yatraCode is ${this.yatraCode}`
//   );
//   this.booking.push(`${name} has booked  ${this.name} ${this.yatraCode}`);
// };
// book.call(flight, 'anuj', 22);
// book.call(flight2, 'atul', 28);
//  console.log(flight);

// ...the Bind Method
// const flight2strict = book.bind(flight2);
// flight2strict('rashmi', 45);
// flight2.passanger = 300;
// flight2.byeplane = function () {
//   console.log(this.plane++);
// };
// document
//   .querySelector('.bye')
//   .addEventListener('click', flight2.byeplane.bind(flight2));
// partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.3, 100));
// const addVAT = addTax.bind(null, 0.25);
// console.log(addVAT(100));
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
// */

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = prompt(
//       `${this.question}\n ${this.options.join('\n')}\n (Write option number)`
//     );
//     this.recordAnswer(Number(answer));
//     // console.log(answer, typeof answer, typeof Number(answer), this);
//   },
//   recordAnswer(answer) {
//     if (answer < 4) {
//       this.answers[answer]++;
//       alert(this.answers);
//     }
//   },
// };
// // poll.registerNewAnswer();
// // console.log(poll.answers);
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
// function duplicateEncode(word) {
//   const empty = [];
//   const array = word.split('');
//   const empty2 = array.map(letter => ());
//   console.log(empty2);
// }

// duplicateEncode('diind');
// // for (let i = 0; i < array.length; i++) {
// //     for (let j = 1; j < array.length; j++) {
// //       if (array[i] === array[j]) {
// //         empty.push(')');
// //       } else empty.push('(');
// //     }
// //   }
// //  for (let i = 0; i < array.length; i++) {
// //     empty.push(array.includes(array[i],i);
// //   }
// const scoreBoard = {
//   'Amil Pastorius': 99373,
//   'Min-seo Shin': 0,
// };
// function addPlayer(scoreBoard, player, score) {
//   scoreBoard['Amil pastorious'] = scoreBoard['Amil pastorious'] + 1000;

//   console.log(scoreBoard);
//   delete scoreBoard[player];
//   console.log(scoreBoard);
// }
// addPlayer(scoreBoard, 'Jesse Johnson', 1337);
// const obj = { greeting: 'hello world' };
// console.log(obj);

// obj.greeting = 'Hi there!';
// console.log(obj);
// obj['greeting'] = 'Welcome.';
// console.log(obj);
// obj.newKey1 = 'new value 1';
// console.log(obj);

// obj['new key 2'] = 'new value 2';
// console.log(obj);
// delete obj.newKey1;
// delete obj[newKey2];
// console.log(obj);
// const key = 'new key 3';
// obj[key] = 'new value 3';
// function normalize(score) {
//   console.log(2 * score + 10);
// }
// function normalizeScore(params) {
//   params.normalizeFunction(params['score']);
// }
// const params = { score: 400, normalizeFunction: normalize };
// normalizeScore(params);
