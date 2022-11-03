let arr = [1, 2, 3, 4, 5];
arr.fill(Math.random()); // wrong
console.log(arr);
let newArr = arr.map(e => Math.floor(Math.random() * 10));
console.log(newArr);

// use map not fill
// fill doesn't take a function as an argument

/* 
let x = new Array(100);
x.fill(0)
x = x.map(e => Math.random()); */
// x = x.fill(0).map(_=> Math.random());
// let x = new Array(100).fill(0).map(Math.random);
let x = Array(100).fill().map(Math.random);
console.log(x);


// const arr = [...new Array(1000)].map(() => Math.floor(Math.random() * 100));

/* fill the array from 0 to n-1 */
const n = 10;
const arrr = [...new Array(n)].map((e,i)=>i);
console.log(arrr)