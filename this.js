/*  NOTES
- this refers to the object that the method is associated with:
- returns a reference to the current object
- arrow functions don't rebind this
- this === context
- bind
 */

const person = {
    name: "khaled",
    walk() {
        console.log(this);
    }
};

person.walk(); // a method in an object => this = current object

// const walk = person.walk; 
// walk() // standalone function => this = global/window object
// /* binding */ 
// // bind method sets the value of this
// const walk2 = person.walk.bind(person); 
// walk2() // standalone function => this = global/window object



/* arrow functions */

const person2 = {
    name: "khaled",
    walk() {
        setTimeout(() => { // arrow functions don't rebind this keyword
            console.log(this);
        }, 1000);
    }
    /*     walk() {
            setTimeout(function () { // not a method on an object but a standalone object so it returns the global/window object
                console.log(this);
            }, 1000);
        } */
};

person2.walk(); // a method in an object => this = current object
