let a = 1;
let b = 2;
/* 1 */
// [a, b] = [b, a];
/* 2 */
a = (b += a -= b) - a;
console.log(a, b);
