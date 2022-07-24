/* The arity of a function is the number of arguments it requires
. Currying a function means to convert a function of N arity into N functions of arity 1. */
/* In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on. */
/* This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

const funcForY = curried(1);
console.log(funcForY(2)); // 3
 */

function unCurried(x, y) {
    return x + y;
}

function curried(x) {
    return function (y) {
        return x + y;
    };
}

const curried = x => y => x + y;

curried(1)(2);

const funcForY = curried(1);
console.log(funcForY(2)); // 3