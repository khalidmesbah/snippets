const arr = [1, 2, 3, 4, 5];
let i = 1;
console.log(i++, "=>", arr);
arr.push(6);
console.log(i++, "=>", arr);
arr.pop();
console.log(i++, "=>", arr);
arr.unshift(0);
console.log(i++, "=>", arr);
arr.shift();
console.log(i++, "=>", arr);

// don't use const with arrays only if you're going to reassign it
let arr2 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
