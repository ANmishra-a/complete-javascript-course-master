// function removeSmallest(n, arr) {
//   let arrCopy = arr.slice().sort();
//   if (n > arr.length) {
//     return [];
//   } else if (n <= 0) {
//     return arr;
//   } else {
//     let smallIndexes = [];
//     let arrCopy = arr.slice(0, arr.length);
//     for (let i = 0; i < n; i++) {
//       let smallestIndex = arrCopy.indexOf(Math.min(...arrCopy));
//       arrCopy[smallestIndex] = Number.MAX_VALUE;
//       smallIndexes.push(smallestIndex);
//     }
//     let resultArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (smallIndexes.includes(i)) {
//         continue;
//       }
//       resultArr.push(arr[i]);
//     }
//     return resultArr;
//   }
// }
// const result = removeSmallest(2, [1, 2, 1, 2, 1]);
// console.log(result);
// const result = {
//   success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
//   failure: ['no-var', 'var-on-top', 'linebreak'],
//   skipped: ['no-extra-semi', 'no-dup-keys'],
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = function () {
//     for (let i = 0; i > result.failure.length; i++) {
//       ['<li class="text-warning">${result.failure[i]}</li>'];
//     }
//   };
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// **************************************************************------
// const count = function () {
//   for (let i = 0; i < 10; i++) {
//     const sum = 0;
//     sum += i;
//     console.log(sum);
//   }
// };
// count();
// sum of integers of an array
// function simpleArraySum(...ar) {
//   // Write your code here
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i];
//     console.log(sum);
//   }
//   return sum;
// }
// const ar = [2, 3, 4, 5];
// simpleArraySum(...ar);
// console.log(...ar);
// ******************************************************************
// isogram function
// function isIsogram(str) {
//   str = str.toLowerCase();
//   let arr = [...str];
//   arr = arr.sort();

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] == arr[i + 1]) {
//       console.log('false');
//     }

//     return true;
//   }
// }
// isIsogram('anunj');

// // console.log(str);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ =================================
// repeating number in string
// function repeating(number) {
//   let block = number.sort();
//   console.log(block);
// }
// repeating([1, 4, 5, 6, 3, 2]);
// ****************************************************
// var number = function () {
//   let passengers = 0;
//   if (indexOf(number) == 0) {
//     passengers = passengers + number;
//   } else {
//     passengers = passengers - number;
//   }
// };
// number([7, 4]);
// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// const novel = new Book('anonymous');
// console.log(novel.writer);
// novel.writer = 'newAuthor';
// console.log(novel.writer);
// *********************************************

// function even_or_odd(number) {
//   if (number % 2 == 0) {
//     return 'Even';
//   } else {
//     return 'Odd';
//   }
// }
// ***************************************************
// function validatePIN(pin) {
//   //return true or false
//   const PIN = pin;
//   console.log(PIN.length);
//   if ((PIN.length = 4 || 6)) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// }
// validatePIN(12212);
// *******************************************************************
// //...
// function descendingOrder(n) {
//   if (n > 0) {
//     let digit = [];
//     for (let i = 0; i < n; i++) {}
//   }
// }
// descendingOrder(12345678);
// function FirstFactorial(num) {
//   for (let i = num; (i = 1); i--) {
//     num = num * num - 1;
//   }
//   return num;
// }
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// const printGoals = function (...any) {
//   console.log(any, any.length);
// };
// team1 < team2 && console.log('Team 1 is most likely to win');
// team2 < team1 && console.log('Team 2 is most likely to win');
// const menu = [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
// ];

// for (const items of menu) console.log(items);
//============================================================================//
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
// const properties = Object.keys(openingHours);
// console.log(properties);
// let star = `we are open on ${properties.length} days:`;
// for (const day of properties) {
//   star += ` ${day}`;
// }

// console.log(star);
// const value = Object.values(openingHours);
// console.log(value);
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [keys, { open, close }] of entries) {
//   console.log(`on ${keys} we open at ${open} and close at ${close}`);

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1)

// for (const [i, players] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${players}`);
// }

// 2)
// const odds = Object.values(game.odds);
// let sum = 0;
// for (const num of odds) sum += num;
// sum /= odds.length;
// console.log(sum);

// 3)
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(`oddds of victory ${team}: ${odd}`);
// }
// const bakiset = new Set(['anuj', 'atul']);
// bakiset.add('rashmi');
// bakiset.delete('rashmi');
// bakiset.clear();
// console.log(bakiset);
// const team = new Map();
// team.set('name', 'bbc');
// team.set('worn', 2);
// team.set('lost', 0);
// console.log(team.set('caption', 'anuj mishra'));
// const team2 = new Map();
// team2.set('name', 'wwf').set('worn', 0).set('lost', 1);
// console.log(team2);

// const questions = new Map([
//   ['question', 'What is your name?'],
//   [1, 'Anuj'],
//   [2, 'atul'],
//   [3, 'rashmi'],
//   ['correct', 1],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);
// console.log(questions.get('question'));
// for (const [key, value] of questions) {
//   if (typeof key === 'number') console.log(`Ansewer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your Answer'));

// if (answer === questions.get('correct')) {
//   alert(questions.get(true));
// } else {
//   alert(questions.get(false));
// }
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1) arry of events using set my Solution
// const array = [];
// for (const [i, value] of gameEvents) {
// array.push(value);
// }
// const arraySet = new Set(array);
// console.log(arraySet);
// // 1) arry of events using set the Solution
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// 2) delete yellow card from gameEvents
// gameEvents.delete(64);
// console.log(gameEvents.has(64));
// 3)
// console.log(gameEvents.size);
// console.log(
//   `An event happened, on average, every ${92 / gameEvents.size} minutes`
// );
// 4)
// for (const [i, value] of gameEvents) {
//   if (i < 45) {
//     console.log(`[FIRST HALF]${i}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF]${i}: ${value}`);
//   }
// }
// const checkMiddleSeat = function (seat) {
//   const value = seat.slice(-1);
//   if (value === 'B' || value === 'C') {
//     console.log('you are doomed');
//   } else {
//     console.log('you are lucky');
//   }
// };
// // checkMiddleSeat('11B');
// // checkMiddleSeat('129C');
// checkMiddleSeat('19D');
// checkMiddleSeat('15E');
// const str = 'aNuJ';
// const lower = str.toLowerCase();
// const upper = lower[0].toUpperCase();
// const correct = upper + lower.slice(1);
// // console.log(correct);
// const wrongEmail = '  Anuj@hello.com  \n';
// const correctEmail = wrongEmail.toLowerCase().replaceAll(' ').replace('\n');
// console.log(correctEmail);
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const trueArray = [];
//   for (const n of names) {
//     trueArray.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(trueArray.join(' '));
// };
// capitalizeName('hii i am anuj mishra please introduce yourself');
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const textSplit = text.split('\n');
  // console.log(textSplit);
  for (let word of textSplit) {
    b;
    word = word.toLowerCase();
    const capital = word.indexOf('_');
    const capitalizedName = word.replace(
      word[capital + 1],
      word[capital + 1].toUpperCase()
    );
    console.log(capitalizedName.replace('_', ''));
  }
});
// const camelCaseConverter = function (underscore_case) {
//   console.log(capitalizedName.replace('_', ''));
//   btn.addEventListener('click', console.log('clicked'));
//   console.log(underscore_case[capital + 1].toUpperCase());
//   const underscore = underscore_case.replace(
//     underscore_case[capital + 1].toUpperCase()
//   );
//   console.log(underscore.replace('_', ''));
// };
// camelCaseConverter(underscore_case);
