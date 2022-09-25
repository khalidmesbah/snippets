function ascendingOrder(arr) {
  return arr.sort((a, b) => a - b);
}
function descendingOrder(arr) {
  return arr.sort((a, b) => b - a);
}
function reverseAlpha(arr) {
  return arr.sort((a, b) => a === b ? 0 : a < b ? 1 : -1);
}
// capital letter first
// number first then capital letters then small letters
const sortAlpha = (arr) => arr.sort();

function reverse(arr) {
  return arr.sort(() => -1);
}
function alphabeticalOrder(arr) {
  return arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
}
function reverseAlphabeticalOrder(arr) {
  return arr.sort((a, b) => a === b ? 0 : a < b ? 1 : -1);
}

let chars = ["c", "a", "d", "b", "z", "Z"];
let nums = [1, 5, 2, 4, 3]; // the array is sorted as a string

console.log("==>original");
console.log(nums)
console.log(chars);

// console.log("==>sortAscending");
// console.log(ascendingOrder(nums));
// console.log(alphabeticalOrder(chars));
// console.log(sortAlpha(chars));
// console.log("==>sortDescending");
// console.log(descendingOrder(nums));
// console.log(reverseAlphabeticalOrder(chars));
// console.log(reverseAlpha(chars));
// console.log("==>reverse");
// console.log(reverse(nums));
// console.log(reverse(chars));

// sort an array without mutating the original array
/*
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.z */
console.log(`==>sort an array without mutating the original array`);
function nonMutatingSortNums(arr) {
  return [...arr].sort((a, b) => a - b);
}
function nonMutatingSortChars(arr) {
  return arr.slice().sort((a, b) => (a === b ? 0 : a < b ? -1 : 1));
}

console.log(nonMutatingSortNums(nums));
console.log(nonMutatingSortChars(chars));


/*
arr.sort()
// capital letter first
// number first then capital letters then small letters
// don't sort objects unless with a specific callback function

 */

// sort a string from smallest word the the longest words
// console.log(` sort a string from smallest word the the longest words`);
// let string = `it was a  dark and stormy night `;
// let words = string.split("")
// let words = string.split(/\W+/).filter(word => word.length).sort((a, b) => a.length - b.length);
// console.log(words);