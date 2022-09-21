/* Functions In JavaScript
01 - function statement === function declaration === function definition
02 - function expression
03 - immediately invoked function expression === self invoked function expression
04 - named function expression
05 - anonymous function
06 - arrow function
07 - callback function 
08 - factory function
09 - constructor function
10 - object's function === methods
11 - generator function
12 - higher order function
13 - lambda function
14 - function factory
15 - pure function
16 - template literal function
17 - closures
- arrow function : always an anonymous function ,doesn't create its own execution context
- lambda functions:-
-- anonymous functions
-- takes one or more parameters
-- has only one expression
-- passed or returned from other functions
// factory functions vs function factories
factory functions => returns an object
function factories => returns a function
*/

/* function statement === function declaration */
function functionStatement() {
    return `functionDeclaration`;
}
/* function expression */
const functionExpression = function () {
    return `functionExpression`;
};
/* named function expression */
const namedFunctionExpression = function xyz() {
    return `namedFunctionExpression => ${xyz}`;
};
/* callback functions */
function callbackFunction() {
    return `callback function`;
}
setTimeout(callbackFunction, 1);
setTimeout(() => {
    return `callback function`;
}, 1);

/* factory function */
function factoryFunction() {
    return {};
}
/* constructor function */
function ConstructorFunction(param) {
    this.param = param;
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
arrowFunction();

/* binding with this */
/* 
- all the functions in js (except arrow functions) bind the value of this keyword to an object 
*/
const test = {
    name: "khaled",
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

/* first class citizens/functions */
// a function that is passed as an argument to another function 
// a function that is returned from another function
// a function that is assigned to a variable as if it's a value


/* the best functions are those with no parameters */


/* pure function => the building block of functional programming
- it can't access anything outside it (database,files)
- returns the same output given the same input
- doesn't cause side effects outside the function's scope(mutate date outside the function or supplied to the function)
- easier to reason about because their reliability
- all functions should be pure unless explicitly causing a side effect
- if a function doesn't return a value, it's an indication that it is causing side effects
// examples
- map
- slice
X push
X splice
X Math.random()
X 
*/

/* not a pure function */
const arr = [1, 2, 3];
function notPure(arr, e) {
    arr.push(e); // mutate data outside it
    return arr;
}
/* pure function */
function pure(a, e) {
    return [...a, e]; // doesn't mutate data outside it
}
console.log(`-------not pure-------`)
console.log(notPure(arr, 4));
console.log(notPure(arr, 4));
console.log(notPure(arr, 4));
console.log(`-------pure-------`)
console.log(pure(arr, 4));
console.log(pure(arr, 4));
console.log(pure(arr, 4));


/* Template literal function */
console.clear();
/* Template literal function */
console.log('Template literal function');

function tlf(string,...variables){
    return variables.reduce((resultString,variable,index)=>{
        return `${resultString}${variable}${string[index+1]}`
    },string[0])
}
console.log(tlf`my first name is ${global.firstName || `khaled`}, my last name is ${global.lastName || `mesbah`} and my job is ${global.job || `frontEnd`}`);

function welcome(){
    console.log(`welcome`)
}
welcome``
welcome()