// 1 global scope
/* // Declare the myGlobal variable below this line
const myGlobal = 10;
var oopsGlobal;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1()
fun2()
console.log(oopsGlobal) */
// 2 local scope
/* function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
 */
// 3 local vs global variable with the same name
/* const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
console.log(myFun()) */
// 4
function rangeOfNumbers(startNum, endNum) {
  // 1
  // if (startNum === endNum + 1) return [];
  // return [startNum].concat(rangeOfNumbers(++startNum, endNum));
  // 2
  // return startNum === endNum
  // ? [startNum]
  // : [startNum].concat(rangeOfNumbers(++startNum, endNum));
  // 3
  // return startNum === endNum + 1
  // ? []
  // : [startNum].concat(rangeOfNumbers(++startNum, endNum));
  // 4
  // return startNum === endNum
  // ? [startNum]
  // : [...rangeOfNumbers(startNum, endNum - 1), endNum];
  // 5
  return startNum === endNum
    ? [startNum]
    : [startNum, ...rangeOfNumbers(++startNum, endNum)];
}
console.log(rangeOfNumbers(1, 10));
console.log(rangeOfNumbers(10, 10));
