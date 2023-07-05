/* 
- a curry function: a function that's returned from another function
- invoke a function multiple times with different variables 
- The arity of a function is the number of arguments it requires
- Currying a function means to convert a function of N arity into N functions of arity 1.
In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
- 
*/

/* This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available.
 */

// function unCurried(x, y) {
//   return x + y;
// }

// function curried(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const curried = (x) => (y) => x + y;

// curried(1)(2);

// const funcForY = curried(1);
// console.log(funcForY(2)); // 3

function sum(x, y, z) {
  return x + y + z;
}
function curriedSum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(3)(2)(1));
