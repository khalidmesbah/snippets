// type coercion === type casting
console.log(`🚀🔥👉 ⚡ 1   ==  1 `, 1 == 1); // true
console.log(`🚀🔥👉 ⚡ 1   ==  2 `, 1 == 2); // false
console.log(`🚀🔥👉 ⚡ 1   == '1'`, 1 == "1"); // true
console.log(`🚀🔥👉 ⚡ "3" ==  3 `, "3" == 3); // true

const a = '10';
const b = 20;
const c = true;
// strings beats numbers with +
console.log(b + a);
console.log(b + b + a);
console.log(a + b);
console.log(a + b + b);
// numbers beats strings(of numbers) with +
console.log(a - b);
console.log(b - a);

console.log(a + b + c)