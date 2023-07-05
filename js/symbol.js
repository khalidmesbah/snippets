/* 
- types
    -> global symbols
    -> unique symbols
- the symbol function returns a symbol
- wanted to be as a private property
- getOwnPropertyNames -> doesn't show symbols
- getOwnPropertySymbols -> shows symbols
- it's a primitive data type
- a unique value
- every symbol value return from symbol() is unique
- what we type inside the parentheses is just a label and it's useful for debugging
- you can generate not unique symbol
-> Symbol() !== Symbol()
-> Symbol() != Symbol()
- the symbol value is used as an identifier for object properties
- the only purpose of symbol value=>
    -> to be used as an identifier for object properties
    -> used as a unique identifier
- methods
    - key()
    - keyFor()
    - toString()
    - valueOf()
    - description
- for in loop doesn't include symbol keys
- JSON.stringify(obj) -> the string will not contain any symbol as a key or as a value
*/

const s1 = Symbol();
const s2 = Symbol(123);
const s3 = Symbol("steve");
console.log(s1, s2, s3);
console.log(s1.description, s2.description, s3.description);
console.log(Symbol() == Symbol());
console.log(`-------->`);
const s = Symbol("1");
console.log(s);
console.log(s.toString());
console.log(s.valueOf());
console.log(s.description);

console.log(`-------->comparing symbols`);
console.log(Symbol.for(123) === Symbol(123));
console.log(Symbol.for(123) === Symbol.for(123));

console.log(`----------------`);
const s4 = Symbol.for("khalid");
const k4 = Symbol.keyFor(s4);
console.log(s4);
console.log(k4);

console.log(`-----the only purpose-----------`);
let obj = {
  name: "name",
  age: 100,
  gender: "male",
  [Symbol("id")]: 123,
};

console.log(obj);

console.log(`-----identical symbols-----------`);
const sy1 = Symbol.for(1); // global symbol
const sy2 = Symbol.for(1);
console.log(sy1 == sy2);
console.log(sy1 === sy2);
