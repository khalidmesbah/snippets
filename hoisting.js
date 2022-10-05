// (variable declaration using var) & (function declaration ) are hoisted Only.
/* 
- function declaration have higher priority than variable declaration
*/
f();
console.log(variable);
function f() {
  console.log(`going`);
}
var variable = 1;

/* function declaration have higher priority than variable declaration */
console.log(sameName); // function win
var sameName = "mesbah";
function sameName() {
  return "khalid";
}
console.log(sameName); // variable win
