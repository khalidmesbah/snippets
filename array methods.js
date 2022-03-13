console.log([1, 2, 3, 4].toLocaleString()); // 1,2,3,4
console.log([1, 2, 3, 4].toString()); // 1,2,3,4
console.log([1, 2, 3, 4].indexOf(2)); // 1
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
console.log([1, 2, 3, 4].pop()); // [1, 2, 3] , returns 4
console.log([1, 2, 3, 4].push(5)); // [1, 2, 3, 4, 5] , returns 5
console.log([1, 2, 3, 4].fill(1)); // [1, 1, 1, 1]
console.log([1, 2, 3, 4].join("-")); // '1-2-3-4'
console.log([1, 2, 3, 4].shift()); // [2, 3, 4] , returns 1
console.log([1, 2, 3, 4].reverse()); // [4, 3, 2, 1]
console.log([1, 2, 3, 4].unshift(1)); // [1, 1, 2, 3, 4] , returns 5 - length i guess
console.log([1, 2, 3, 4].includes(2)); // true
console.log([1, 2, 3, 4].map((num) => num * 2)); // [2, 4, 6, 8]
console.log([1, 2, 3, 4].some((num) => num > 3)); // true
console.log([1, 2, 3].some((num) => num >= 3)); // true
console.log([1, 2, 3].some((num) => num > 3)); // false
console.log([1, 2, 3, 4].every((num) => num > 3)); // false
console.log([1, 2, 3, 4].every((num) => num < 9)); // true
console.log([1, 2, 1, 4].find((num) => num > 2)); // 4 =>first number bigger than 2
console.log([1, 2, 3, 4].find((num) => num > 2)); // 3 =>first number bigger than 2
console.log([1, 2, 3, 4].filter((num) => num > 2)); // [3, 4] => returns an array of the nubmers bigger than 2
console.log([1, 2, 3, 4].findIndex((num) => num > 2)); // 2 => give my the index of the first number bigger than 2
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
); // returns the first element that sa tisfies the conditions
// remove array dublicates
console.log(
  Array.from(new Set([1, 2, 3, 1, 1, 2, 4, 5, 5, 6, 7, 7, 7, 7, 7, 7]))
);

// array copy with spread operator
const nums = [1, 2, 3, 4, 5];
const numsCopy  = [...nums];
