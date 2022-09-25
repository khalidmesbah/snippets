const a = [1, 7, 2, 8, 3, 9, 4, 5, "khaled"];
const b = ["khaled", 2, 5, 3, 8, 1, 7, 9, 4];
const equals = (a, b) =>
  a.length === b.length &&
  a.sort() &&
  b.sort() &&
  a.every((v, i) => v === b[i]);
// const equals = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort());
console.log(equals(a, b));

