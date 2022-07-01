/* 
 + var 
  - global => anywhere else
  - local => inside a function
 + let
  - local =>When you declare a variable with the let keyword inside
   a block, statement, or expression,
   its scope is limited to 
   that block, statement, or expression.
 + const
  - 
*/

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
// -  When you declare a variable with the var keyword,
// it is declared globally, or locally if declared inside a function.
// {
// var k = 1;
// }
// function fun() {
// var l = 1;
// }
// console.log(k);
// console.log(l);
/* 
 When you declare a variable with the let keyword inside a block, statement, or expression,
 its scope is limited to that block, statement, or expression. 
*/

/* {
  let k = 1;
}
function fun() {
  let l = 1;
}
console.log(k);
console.log(l);
 */
/* var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

var numArray = [];
for (let j = 0; j < 3; j++) {
  numArray.push(j);
}
console.log(numArray);
console.log(j);
 */

// var printNumTwo;
// for (let i = 0; i < 3; i++) {
//   /* printNumTwo() returned the correct value because three different i variables
//    with unique values (0, 1, and 2) were created
//    by the let keyword within the loop statement. */
//   if (i === 2) {
//     printNumTwo = function () {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// console.log(i);

