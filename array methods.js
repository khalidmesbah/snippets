console.log([...[`k`, `h`, `a`, `l`, `e`, `d`].entries()]);
console.log([...[`k`, `h`, `a`, `l`, `e`, `d`].keys()]);
console.log([...[`k`, `h`, `a`, `l`, `e`, `d`].values()]);
console.log([1, 2, 3, 4].toLocaleString()); // 1,2,3,4
console.log([1, 2, 3, 4].toString()); // 1,2,3,4
console.log([1, 2, 3, 4].concat([5, 6, 7, 8])); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log([1, 2, 3, 4].slice(0, 3)); // [ 1, 2, 3 ]
console.log([1, 2, 3, 4].findIndex((num) => num == 2)); // 1
console.log([1, 2, 3, 4].at(2)); // 1
console.log(`========================`);
console.log(
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
  ].flat(2)
);
console.log(`========================`);
console.log([1, 2, 3, 4].pop()); // [1, 2, 3] , returns 4 => the removed value
console.log([1, 2, 3, 4].shift()); // [2, 3, 4] , returns 1 => the removed value
console.log([1, 2, 3, 4].push(5)); // [1, 2, 3, 4, 5] , returns 5=>the length of the array not the value of the pushed item
console.log([1, 2, 3, 4].fill(1)); // [1, 1, 1, 1]
console.log([1, 2, 3, 4].join("-")); // '1-2-3-4'
console.log([1, 2, 3, 4].reverse()); // [4, 3, 2, 1]
console.log([1, 2, 3, 4].unshift(1)); // [1, 1, 2, 3, 4] , returns 5 => the length of the array
console.log([1, 2, 3, 4].includes(2)); // true
console.log([1, 2, 3, 4].map((num) => num * 2)); // [2, 4, 6, 8]
console.log([1, 2, 3, 4].some((num) => num > 3)); // true
console.log([1, 2, 3].some((num) => num >= 3)); // true
console.log([1, 2, 3].some((num) => num > 3)); // false
console.log([1, 2, 3, 4].every((num) => num > 3)); // false
console.log([1, 2, 3, 4].every((num) => num < 9)); // true
console.log([1, 2, 1, 4].find((num) => num > 2)); // 4 =>first number bigger than 2
console.log([1, 2, 3, 4].find((num) => num > 2)); // 3 =>first number bigger than 2
console.log([1, 2, 3, 4].findIndex((num) => num > 2)); // 2 => give my the index of the first number bigger than 2
console.log([1, 2, 3, 4].indexOf(2)); // 1
console.log([1, 2, 3, 4, 2].lastIndexOf(2)); // 4
console.log([1, 2, 3, 4].filter((num) => num > 2)); // [3, 4] => returns an array of the numbers bigger than 2
console.log([1, 2, 3, 4].reduce((acc, num) => acc + num)); // 10
console.log([1, 2, 3, 4].reduce((acc, num) => num + acc, 5));
[(1, 2, 3, 4)].forEach((e) => console.log(e / 2));
console.log(
  [
    "Lawyer",
    "Doctor",
    "Programmer",
    "Chef",
    "Store Manager",
    "Camera man",
  ].find((e) => e.startsWith("C"))
); // returns the first element that satisfies the conditions
// remove array duplicates
console.log(
  Array.from(new Set([1, 2, 3, 1, 1, 2, 4, 5, 5, 6, 7, 7, 7, 7, 7, 7]))
);

console.log(`----------spread operator----------`);
// extremely useful when adding more elements between arrays
// array copy with spread operator
const nums = [1, 2, 3, 4, 5];
// const numsCopy = nums; // when you modify the numsCopy the original copy will be modified too  
const numsCopy = [...nums];
// nums.pop()
console.log(numsCopy, nums);
// array combine with spread operator
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
// const combined = nums1.concat(nums2) // concat method
const combined = ['firstArr', ...nums1, 'middle', ...nums2, 'secondArr'];
// console.log(combined)

console.log(`-----------------------`);
/* map VS forEach */
// forEach works with html collections
// map doesn't work with html collections


/* mutating the array */
const names = [`khaled`, `gaber`, `mesbah`, `sebaq`];
const copiedNames = [...names];
const sortedNames = names.sort();
names.pop();
console.log(names, copiedNames, sortedNames);

// unrelated copied arrays using ... : spread operator
// const copiedNames = [...names];
// Functional programming is all about creating and using non-mutating functions.



// . This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.a
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.map((v, i) => console.log(v, i));

/* copy arrays using slice */
/* 
 If the arguments are not provided, the default is to start at the beginning of the array through the end
 , which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.
*/

const newArr = arr.slice();
/* copying arrays */
const originalArray = [1, 'a', 2, 'b', 3, 'c'];
const arr1 = [...originalArray];
const arr2 = [].concat(originalArray);
const arr3 = originalArray.slice();
const arr4 = originalArray.filter(e => e);
const arr5 = originalArray.map(e => e);
const arr6 = new Array().concat(originalArray);
const arr7 = Array.from(originalArray); // Array.from(originalArray.values())
console.log(`originalArray`, originalArray);
originalArray.pop();
originalArray.pop();
originalArray.pop();
console.log(`originalArray`, originalArray);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
console.log(arr7);