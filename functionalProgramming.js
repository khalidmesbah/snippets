// Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
// Pure functions - the same input always gives the same output = doesn't cause any side effects
// Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled;

/* So far, we have seen two distinct principles for functional programming:
Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.
Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable. */

/* functional programming is centered around a theory of functions. */
// map is a pure function

/* NOTES 
- the function only depend on its input arguments
- the function doesn't change any global variables / doesn't cause side effects
- excellent naming
+ features of function programming style
    - pure functions
    - 
    
*/

/* pure functions 
- same input => same output
- doesn't cause side effects
- console.log() => is a side effect
- produces predictable results
- don't change the state of the application 
*/
function add(a,b){return a+b} // pure
function ran(){return Math.random()} // not pure
