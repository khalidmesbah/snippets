/* Computed Property Names
It is very useful when you need to create custom objects based on some variables.
 */

/* 1 */
let prop = "my name";
let id = "500";
let mobile = "08923";

let user = {
  [prop]: "Jack",
  [`user_${id}`]: `${mobile}`,
};

console.log(user[prop]); // Jack
console.log(user[`user_${id}`]); // 08923

/* 2 */
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

/* 3 */
var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config.mobileSize); // 4