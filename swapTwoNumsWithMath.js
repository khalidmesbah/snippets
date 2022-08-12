let a = 1;
let b = 2;
a = (b += a -= b) - a;
// a = 1 - -1  = 2
// b = 1
console.log(a, b);