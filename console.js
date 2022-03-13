console.log(`hello`);
console.error(`hello`);
console.warn(`hello`);
console.assert(`hello`);
console.assert(0 || `error`);
console.dir("hello");
console.table([
  ["foo", 21],
  ["bar", 14],
  ["loda", 32],
  ["khaled", 32],
  ["mesbah", 32],
]);
const obj = {
  name: "khaled",
  salary: "unknown",
};
console.table(obj);
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.log(`====================`);
console.countReset("loda");
console.log(`====================`);
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");
console.count("loda");

/* time */
console.time("hi");
// console.timeStamp("hi");
setTimeout((e) => {
  return 1;
}, 100);
console.timeLog("hi");
console.timeEnd("hi");

/* trace */
console.log(`======trace======`);
function fun1() {
  function fun2() {
    console.trace(`tracing the function`);
  }

  fun2();
}
fun1();
console.log(`======end trace======`);

console.log(
  `%c javascript is awesome `,
  `color:red;background:black;font-size:30px`
);
