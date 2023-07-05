/* NOTES
- should to know before learning react
- we pass `values` when using primitive data types
- we pass `references` when using structural data types
*/

/* primitive data types */
let x = 1;
let y = x;
y += 1;
console.log(x); // 1 not 2
console.log(y); // 2

// !important => `x and y` don't have referential equality
// !important => `x and y` are't referentially equal

/* structural data types */
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4] also
console.log(arr2); // [1, 2, 3, 4]

// !important => `arr1 and arr2` have referential equality
// !important => `arr1 and arr2` are referentially equal
