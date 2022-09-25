/* let str = "khaled";
const iterator = str[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(`------------------`);

// Implementation Example
str[Symbol.iterator] = function () {
  const _value = this;
  console.log(this);
  console.log(`hihihi`)
  return {
    // this is the iterator object
    _index: -1,
    next() {
      if (this._index === _value.length - 1)
        return { value: undefined, done: true };
      this._index++;
      return { value: _value[this._index], done: false };
    },
  };
};

let iterator2 = str[Symbol.iterator]();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
 */

const arr = [1, 2, 3, 4, 5];

/* 
- the array is iterable and it implements an iterator function that allows it to be looped over
- we can override the default behavior of the for of loop by symbol.iterator 
*/
arr[Symbol.iterator] = function () {
  // iterator function
  let i = 0;
  let arr = this;
  return {
    next: function () {
      if (i >= arr.length) return { done: true };
      else return { value: arr[i] + arr[i++], done: false };
    },
  };
};

for (const e of arr) console.log(e);
