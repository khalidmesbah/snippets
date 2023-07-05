let a = 9e2;
console.log(a);

/* check if two floating point numbers are equals */
function epsEqu(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
console.log(epsEqu(0.1 + 0.2, 0.3));
console.log(epsEqu(0.6, 0.25 + 0.35));
