let str = "khaled";
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
