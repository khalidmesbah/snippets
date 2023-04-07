let a = 1;
let b = 2;
/* 1 */
// [a, b] = [b, a];
/* 2 */
a = (b += a -= b) - a;
/* 3 */
let x = 10;
let y = 5;
console.log(`after`, x, y);
x = x + y;
y = x - y;
x = x - y;
console.log(`before`, x, y);
