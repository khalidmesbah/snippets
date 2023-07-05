n = 2.2;
n = 2;
console.log(
  Number.isInteger(n),
  parseInt(n) === n,
  Math.trunc(n) === n,
  n % parseInt(n) === 0,
  n / parseInt(n) === 1
); // to check if the number is integer
