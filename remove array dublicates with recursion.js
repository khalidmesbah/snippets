let arr = [1, 2, 3, 1, 1, 2, 4, 5, 5, 6, 7, 7, 7, 7, 7, 7];
let set = [];
function rmDublicates(arr, len) {
  if (--len === 0) return set.sort();
  if (!set.includes(arr[len])) set.push(arr[len]);
  return rmDublicates(arr, len);
}
rmDublicates(arr, arr.length);
console.log(set);

// or
console.log(
  Array.from(new Set([1, 2, 3, 1, 1, 2, 4, 5, 5, 6, 7, 7, 7, 7, 7, 7]))
);
