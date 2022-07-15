/* Function Types
- anonymous function
- callback function
- named function
-- factory
-- constructor
- objects functions / methods
- generated function
- arrow function : always an anonymous function ,doesn't create its own execution context
- higher order functions
- lambda functions:-
-- anonymous functions
-- takes one or more parameters
-- has only one expression
-- passed or returned from other functions
// factory functions vs function factories
factory functions => returns an object
function factories => returns a function
*/

/* anonymous function */
const anonymousFunction = function () {
    return `anonymous function`;
};
/* callback functions */
function callbackFunction() {
    return `callback function`;
}
setTimeout(callbackFunction, 1);
setTimeout(() => {
    return `callback function`;
}, 1);
setTimeout(function () {
    return `callback function`;
}, 1);

/* named function */
function Factory() {
    return {};
}
function Constructor(param) {
    this.param = param;
}
function doSomething() {
    return `doing something`;
}
/* objects method */
const me = {
    sayHello() {
        return `objects method`;
    },
    sayNo: function () { }
};

/* arrow function */
const arrowFunction = () => {
    console.log(arguments);
};
// arrowFunction();

/* binding with this */
/* 
- all the functions in js (except arrow functions) bind the value of this keyword to an object 
*/
const test = {
    name: "sina",
    talk: function () { // regular functions when invoked by an object bind this keyword to the object
        return this;
    },
    walk: () => this
};
console.log(test.talk());
console.log(test.walk());


/* why not to use arrow functions */
/* 
- in objects except as callbacks
- constructor functions
- event handlers because they are callback functions


*/