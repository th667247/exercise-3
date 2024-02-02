// Import: exercises.js
import { flattening, loop, everyLoop, everySome } from './exercises.js';

// Part 2: Node.js file that prints one of three quotations to the console when run.
const quotations = [
    "I think, therefore I am",
    "Divide each difficulty into as many parts as is feasible and necessary to resolve it",
    "The reading of all good books is like a conversation with the finest minds of past centuries."
];

const randomIndex = Math.floor(Math.random() * quotations.length);
const selectedQuotation = quotations[randomIndex];

console.log(selectedQuotation);

// Exercise 1: flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenedArray = flattening(arrays);
console.log(flattenedArray); // → [1, 2, 3, 4, 5, 6]

// Exercise 2: loop(value, test, update, body)
loop(3, (n) => n > 0, (n) => n - 1, console.log);
// → 3
// → 2
// → 1

// Exercise 3: everyLoop(array, test)
console.log(everyLoop([1, 3, 5], (n) => n < 10)); // → true
console.log(everyLoop([2, 4, 16], (n) => n < 10)); // → false
console.log(everyLoop([], (n) => n < 10)); // → true

// Exercise 4: everySome(array, test)
console.log(everySome([1, 3, 5], (n) => n < 10)); // → true
console.log(everySome([2, 4, 16], (n) => n < 10)); // → false
console.log(everySome([], (n) => n < 10)); // → true
