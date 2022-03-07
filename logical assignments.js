let a = 10,
  b = 0;
a &&= 20; // if (a) a = 20; if truthy
b ||= 20; // if (!b) b = 20; if falsy

console.log(a, b); //20 20
