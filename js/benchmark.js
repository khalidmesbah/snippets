const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

function add1(n) {
  return n + 1;
}
function add2(n) {
  return n + 2;
}
function add3(n) {
  return n + 3;
}
function add4(n) {
  return n + 4;
}
function add5(n) {
  return n + 5;
}
function add6(n) {
  return n + 6;
}
function add7(n) {
  return n + 7;
}
function add8(n) {
  return n + 8;
}
function add9(n) {
  return n + 9;
}
function add10(n) {
  return n + 10;
}
Suite.add("functions", function () {
  let a = 0;
  a = add1(a);
  a = add2(a);
  a = add3(a);
  a = add4(a);
  a = add5(a);
  a = add6(a);
  a = add7(a);
  a = add8(a);
  a = add9(a);
  a = add10(a);
})
  .add("no functions", function () {
    let a = 0;
    a = a + 1;
    a = a + 2;
    a = a + 3;
    a = a + 4;
    a = a + 5;
    a = a + 6;
    a = a + 7;
    a = a + 8;
    a = a + 9;
    a = a + 10;
  })
  .on("cycle", function (e) {
    console.log(e.target.toString());
  });


  // credit for https://youtu.be/DUj94R5XT08
  