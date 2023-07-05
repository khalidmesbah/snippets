let arr = [1, 2, 3, 4, 9, 5, 7];
let biggest = arr.reduce((a, v) => (v > a) ? v : a);
console.log(biggest);