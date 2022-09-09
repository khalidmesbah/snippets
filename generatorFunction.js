/* 
- it can be used to generate id or random numbers or a sequence of numbers
*/
function* gen() { // generate sequence of numbers
  let n = 0;
  while (true) yield (n++, 2 * (50 * n ** 2 - 80 * n + 37));
}
const generator = gen();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: fa}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
console.log(generator.next()); // {value: 8474, done: false}
