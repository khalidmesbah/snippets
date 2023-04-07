const l = console.log;
const myArray = [];
const myObject = {};
const myNull = null;
const myNum = 1;
const myString = "string";

function isIterable(obj) {
  // test if obj is null, undefined, or iterable
  obj = obj ?? new Error("Value is null or undefined");
  if (obj instanceof Error) throw obj;
  return obj[Symbol.iterator] && typeof obj[Symbol.iterator] === "function"
    ? true
    : false;
}
l(isIterable(myArray)); // true
l(isIterable(myObject)); // false
// l(isIterable(myNull)); // false
l(isIterable(myNum)); // false
l(isIterable(myString)); // true
