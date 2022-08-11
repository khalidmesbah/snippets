/* 
Use Closure to Protect Properties Within an Object from Being Modified Externally
In JavaScript, a function always has access to the context in which it was created. This is called closure
.
- a closure of a function is its inner variables/scope + outer variables/scope
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
ducky.hatchedEgg =21;
console.log(ducky.getHatchedEggCount());
