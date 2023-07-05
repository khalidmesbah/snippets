/* 
- it can be used to generate id or random numbers or a sequence of numbers
- returns an iterable object
- can create an infinite loop
- create  iterators
- methods
  - next => continue executing the generator
  - return => exit a generator
  - throw => throw an error
- properties
  - next().value
  - next().done
*/
console.log(`=====>generate sequence of numbers`)
function* gen() {
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
console.log(generator.return()); // {value: 3854, done: fa}
// console.log(generator.throw('new Error('hi')')); // {value: 3854, done: fa}
// console.log(generator.next()); // {value: 3854, done: fa}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
console.log(generator.next()); // {value: 8474, done: false}

console.log(`=======>convert arrays to iterator====`)
function* loop(array) {
  for (const element of array) yield element;
}
const iterator = loop([1, 2, 3, 4, 5, 6]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(`====>passing arguments to the generator<====`);
function* generate2() {
  let id = 1;
  while (true) {
    const increment = yield id;
    id += increment == null || !Number(increment) ? 1 : increment;
  }
}

const gen2 = generate2();
console.log(gen2.next());
console.log(gen2.next(7));
console.log(gen2.next());
console.log(gen2.next(324));
console.log(gen2.next("asdf"));
console.log(gen2.next(12));
console.log(gen2.next());
console.log(gen2.next());
