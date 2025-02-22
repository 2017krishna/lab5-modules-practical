import { add, subtract, addAndLogUpper, findMaxAndMultiply } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';

console.log(add(8, 17));
console.log(subtract(18, 12));
console.log(toUpperCase('krishna'));
console.log(toLowerCase('PROGRAMMING'));

addAndLogUpper(10, 70);

const array = [1, 2, 4, 5, 8];
const multiplier = 10;
const result = findMaxAndMultiply(array, multiplier);
console.log(toUpperCase(result.toString()));