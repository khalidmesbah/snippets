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
