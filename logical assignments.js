let a = 10,
  b = 0;
a &&= 20; // if (a) a = 20; if truthy
b ||= 20; // if (!b) b = 20; if falsy

console.log(a, b); //20 20

console.log(`---------`);
const printTwo = () => {
  console.log(2);
};

0 && printTwo();
1 && printTwo();

console.log(`---------`);

const print = (name) => {
  console.log(name);
};
let f = ``;
let f2 = `apple`;
print((f ||= "banana"));
print((f2 ||= "banana"));

