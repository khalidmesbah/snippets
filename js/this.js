/*  NOTES
- this: the owner of the execution context, the one that calls the method
- this refers to the object that the method is associated with
- this === current execution context
- this refers to the object it belongs to
- this returns a reference to the current object
- arrow functions don't rebind this
- this === context
- bind : no parameters => doesn't execute the function but returns it
- call : multiple parameters = > execute the function
- apply : exactly the call but instead of separating the list of parameters with commas we pass them as an array
+ it depends on where it's used
- this alone => global/window object
- in a method => the current object
- object method binding
- in a function
- in an event handler
- method => this = current object
- function => this = window object
- func => this = window function
 */

const person = {
  name: "khaled",
  walk() {
    console.log(this);
  },
  eat(param1, param2, param3) {
    console.log(`invoked`);
    return `${param1} ${param2} ${param3}`;
  },
  sayMyName() {
    return `my name is ${this.name}`;
  },
};

// person.walk(); // a method in an object => this = current object

// const walk = person.walk;
// walk() // standalone function => this = global/window object
// /* binding */
// // bind method sets the value of this
// const walk2 = person.walk.bind(person);
// walk2(); // the person object

/* arrow functions */

const person2 = {
  /* the glossary */
  /* 
    - to make this refers to the person2 => the object created it
        - regular functions in objects in general
        - arrow functions as callback functions
    */
  name: "khaled",
  THIS: this,
  walk() {
    setTimeout(() => {
      // arrow functions don't rebind this keyword // normal callback functions do
      console.log(this); // => person2 object
    }, 0);
  },
  walk2() {
    // solution
    setTimeout(
      function () {
        // not a method on an object but a standalone object so it returns the global/window object
        console.log(this); // => window object // callback functions rebind this to the window object
      }.bind(this),
      0
    );
  },
  walk22() {
    setTimeout(function () {
      // not a method on an object but a standalone object so it returns the global/window object
      console.log(this); // => window object // callback functions rebind this to the window object
    }, 0);
  },
  /* callback functions are executed at the window context
        walk2() {
        [object Context]setTimeout[object Context](window context,[object Context] 1000);[object Context]
        
        function () {
            console.log(this); => callback function
        }
    */
  walk3: () => console.log(this),
  walk4: function () {
    console.log(this);
  },
};
console.log(person2.THIS);
// person2.walk();
// person2.walk2();
// person2.walk22();
// person2.walk3();
// person2.walk4();

/* - this alone */
// console.log(this); //=> {}
/* - in a method */
// person.walk(); // refers to the current object
/* - object method binding */
// console.log(`-------------`);
// const personWalk = person.walk.bind(person);
// const personEat = person.eat.call(person, `1`, `2`, `3`); // ?? self invoked
// const personEatApply = person.eat.apply(person, [`1`, `2`, `3`]); // ?? self invoked
// personWalk();
// console.log(personEat);
// console.log(personEatApply);
// console.log(`-------------`);
/* - in a function // depends on how you call a function*/
// const walk = person.walk(); // walk is just a reference to the object's walk function ?? self invoked
// walk; // walk is the same as person.walk() function because it's a reference to it
// const walk2 = person.walk; // stand alone function => global
// walk2(); // calling a standalone function => global
//////// another example
// console.log(`🚀🔥👉 ⚡ another example`);
const person3 = {
  firstName: "khalid",
  lastName: "gaber",
  param1: "loda",
  param2: "adol",
  param3: "mesbah",
  name: `loda`,
};
const fullName = person.sayMyName.bind(person3);
// console.log(fullName());
/* - in an event handler */
// this refers to the html element which receive the event

/* bind call apply */
// console.log(`-----------bind call apply-----------`);
function talk(lang) {
  if (lang === `it`) return `io somo ${this.name}`;
  else if (lang === `en`) return `i am ${this.name}`;
  return `wrong lang`;
}
const me = {
  name: `khaled`,
};
const you = {
  name: `sara`,
};
// console.log(talk.apply(me, ['it']));

/* event handlers */

/* in a function => global/window*/
function printThis() {
  console.log(this);
}
printThis.bind();
