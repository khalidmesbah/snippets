// "use strict";
/* use strict
- not `use strict` 
- is called use strict directive
- strictly checks if the variable is defined using the var keyword
- the variables must be declared
- to enforce variable declaration
- any code inside a class is in the strict mode
- modules are using the strict mode
- 
*/

/* y = 12;
console.log(y);
var y; 
console.log(y); */

/* function f(){
    x = 10
}
f();
console.log(x) */

// don't allow to reassign a readonly property
/* undefined = 10
NaN = 20
console.log(undefined)
console.log(NaN) */

// don't allow to reassign a readonly property
/* const obj = {};
Object.defineProperty(obj, "readonly", { writable: false, value: 120 });
obj.readonly = 1;
console.log(obj.readonly);
 */

// don't allow to delete things that are not deletable
/* delete Object.prototype */

// don't allow for un expected results
/* function combine(a, a, c) {
  return [a, a, c];
}
console.log(combine(1, 2, 3));
 */

// don't allow octal literals
/* 
    console.log(0x123)
*/

// don't allow setting properties on primitive values
/* const v = "value";
v.prop = 2;
console.log(v.prop) */

// changes this

/* function sum(a, b) {
  console.log(this);
  return a + b;
}
console.log(this);
sum.bind(this)(1, 2); */

// don't allow to change arguments
/* function sum(a, b) {
  a = 20;
  return [a, b, arguments[0], arguments[1]];
}
console.log(sum(1, 2)); */
