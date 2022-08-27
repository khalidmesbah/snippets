/* what is closure
In JavaScript, a function always has access to the context in which it was created=>This is called closure.
- a closure of a function is its inner variables/scope + outer variables/scope
*/
/* why we need closures
- to create self contained modules
- to create self contained state
- Protect Properties Within an Object from Being Modified Externally
- avoid global variables
- abstraction
*/

function sayHello(name) {
    (function () {
        console.log(`hello ${name}`);
    })();
}


/* make a private property */
function Bird() {
    let hatchedEgg = 10; // private property

    this.getHatchedEggCount = function () { // privileged method
        return hatchedEgg;
    };
}
let ducky = new Bird();
ducky.hatchedEgg = 21;
console.log(ducky.getHatchedEggCount());


/* abstraction */
function closureFunction() {
    var x = 0;
    function increment() {
        x++;
    }
    function decrement() {
        x--;
    }
    function getValue() {
        return x;
    }
    function setValue(value) {
        x = value;
    }
    return {
        increment,
        decrement,
        getValue,
    };
}
const f = closureFunction();
f.increment();
f.increment();
f.increment();
f.increment();
f.increment();

console.log(f.getValue());