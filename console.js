console.log(
  "string: %s, number: %i, float: %f, object: %o",
  "khalid",
  21,
  21.5,
  { name: "khalid", age: 21 }
);
console.log(
  `%c javascript is awesome with styling`,
  `color:red;background:black;font-size:30px`
);
console.log(`log`);
console.error(`error`);
console.warn(`warn`);
console.debug("debug");
console.info("info");
console.assert(`assert`);
console.assert(true || `true`);
if (true) console.error("true");
console.assert(false || `false`);
if (  false) console.error("false");
console.dir("dir");
console.table([
  ["table", 1],
  ["table", 2],
  ["table", 3],
  ["table", 4],
  ["table", 5],
]);
const obj = {
  name: "name",
  salary: "salary",
};
console.table(obj);
console.log(`====================`);
console.group(`outside group`);
console.group(`inside group`);
console.log(`inside inside group`);
console.groupEnd();
console.groupEnd();
console.log(`====================`);
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.countReset("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count()
console.count()
console.log(`====================`);

/* time */
console.time("time");
console.timeLog("time");
for (let i = 0; i < 1000000; i++);
console.timeLog("time");
for (let i = 0; i < 1000000; i++);
console.timeEnd("time");

/* time 2 => will appear in the javascript profiler in the web console / dev tools */
console.profile("time");
for (let i = 0; i < 1000000; i++);
console.timeStamp("time");
for (let i = 0; i < 1000000; i++);
console.profileEnd("time");

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
