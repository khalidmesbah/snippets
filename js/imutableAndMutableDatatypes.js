const s = "stringsAreImmutable";
console.log(`🚀🔥👉 ⚡ s`, s);
const a = ["arrays", "are"];
console.log(`🚀🔥👉 ⚡ a `, a);
a.push("mutable");

let str = "Khalid";
str[0] = "s";
console.log(str);
let arr = [1, 2, 3, 4, 5];
arr[0] = 0;
console.log(arr);

let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);

/* 
- strings are immutable
- all primitive values are not immutable
- objects only are mutable like arrays 
- const will not prevent data mutation
- use Object.freeze to prevent data mutation
- 
*/

