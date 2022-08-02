/* 
Objects 
- almost every thing in javascript is an object
- hasOwnProperty => checks if the property is in the object itself not in the prototype
- for(let user in users<the object>) console.log(user)
- Object.keys
- for (let user in usersObj) if (usersObj[user]["online"])count++;
- delete object key
- modify, remove, add key-value pairs
- tekkenCharacter.origin = 'South Korea';
- dot notation => if the identifier is valid
- bracket notation => if the identifier is not valid or dynamic identifier (dynamic property name)
- the best functions are those with no parameters
- prototype property belongs only to constructor functions / classes
- __proto__: a property for every variable that points to the parent object it inherits from
- prototype: a property for constructor functions(classes) that contains all the stuff that will be inherited by its instances
- new Person('param1') => object instantiation
- Remember to Set the Constructor Property when Changing the Prototype
- Note that the constructor property is a reference to the constructor function that created the instance.
- 
*/


/* - Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
- we can use bracket notation to access a property when it's name is a string that contains a whitespace,
 Another use of bracket notation on objects is to access a property which is stored as the value of a variable.
  This can be very useful for iterating through an object's properties or when accessing a lookup table.
Another way you can use this concept is when the property's name is collected dynamically during the program execution */
const obj = {
  1: "number one",
  name: "khaled",
  age: 21,
  "college & university": "faculty of science, sohag university",
  quote: "work hard",
};


/* good for problem solving
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line 
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user]["online"])
      count++;
  }
  return count
  // Only change code above this line
}

console.log(countOnline(users));
*/

/* Ways to create objects */
/* 
1 - object literal
let employee = {
  baseSalary:3000,
  rate:20,  
  getWage:function(){
    return this.baseSalary * this.rate;
  }
}
2 - factories
3 - constructor functions
4 - classes
5 - new Object
6 - {}
7 - object.create({})


*/
// object literal
const car_objectLiteral = {
  name: 'loda',
  model: 2002,
  color: 'silver'
};
// factory
/* 
  - simple
  - no duplicates
  - data privacy
*/
function createCar(name, model, color) {
  return {
    name,
    model,
    color,
    start: function () {
      console.log(`${name} is starting`);
    },
    stop: function () {
      console.log(`${name} is stopping`);
    }
  };
}
const car_factory = createCar('loda', 2002, 'silver'); // you cant change its properties or functions unlike literal objects
car_factory.name = `king`;
console.log(car_factory.prototype);

// constructor function
// any thing uses the new keyword is a constructor function
function Car(name, model, color) {
  let _tyres = 4;
  // private property
  Object.defineProperty(this, `tyres`, {
    get: function () {
      return _tyres;
    }
  });
  Object.defineProperty(this, `test`, {
    configurable: false, // can't be deleted
    writeable: false, // can't be reassigned
    enumerable: false, //
    value: 10
  });
  this.name = name;
  this.model = model;
  this.color = color;

}
Car.prototype.start = function () {
  console.log(`${this.name} is starting`);
};
Car.prototype.stop = function () {
  console.log(`${this.name} is stopping`);
};
const tesla = new Car(`tesla`, 2012, `green`);
tesla.test = `loda`;
// console.log(tesla.test);
// for (let key in tesla) {
//   if (tesla.hasOwnProperty(key)) // if you want to exclude the prototype methods and properties
//     console.log(key);
// }
// the functions inside the objects made with the constructor function are made for each object which is a waste of memory
// => so we add the (functions or the data) which will be the same for every/most object/s to the prototype of the constructor function 
// the methods or data that will be the same for every object we add it to the prototype of the constructor function
// note: you can't use the arrow function with the prototype because `this` will refer to something else
/* 
Car.prototype.stop = function () {
  console.log(`${this.name} is stopping`);
};
 */
const car_constructorFunction = new Car('loda', 2002, 'silver');
/* constructorFunction.prototype VS instance.__proto__ */
// prototype === __proto__ except that (prototype => constructorFunction) and (__proto__ => instances)
// console.log(car_constructorFunction.__proto__)
// console.log(Car.prototype)

/* Array is a constructor function with one property which is length and a lot of functions in it's prototype*/
// [] is a replacement for new Array
// console.log(new Array , [])
// let arr = new Array();
// console.log(Array.prototype === arr.__proto__) // true

/* Object is a constructor function  */
// {} is a replacement for new Object
// console.log(new Object , {})
// let test = new Object({ 'khaled': 1, 'loda': 2, 'coco': 3 });
// console.log(test);

/* Function is a constructor function */
// const fun = new Function(`p`, `console.log(p)`);
// fun('khaled');


/* inheritance */

function Lancer(name, model, color, maxSpeed) { // this is a class
  this.name = name;
  this.model = model;
  this.color = color;
  this.maxSpeed = maxSpeed;
}
// Lancer.prototype = Car.prototype // is wrong because if you add functions to the Lancer.prototype they will be overwritten by the Car.prototype

Lancer.prototype = Object.create(Car.prototype); // this is prototype inheritance
Lancer.prototype.constructor = Lancer; //  to make the Lancer prototype to have its own constructor
function inherit(child, parent) { // a helper function 
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}
const merage = new Lancer('merage', 2002, 'red', 454);
// console.log(merage.tyres); // doesn't work


// functions can be used to create objects by adding the new keyword before them which are known as constructor functions
// the new keyword before a functions executes the functions as a constructor function to make objects  



/* let in VS let of */
// let of doesn't work with objects because they are not iterable
// let arr = {
//   'k': 1, 'h': 2, 'a': 3, 'l': 4, 'e': 5, 'd': 6
// };
// for (let key in arr) {
//   console.log(key);
// }

// classes // same as constructor functions
/* 
- the functions are already in the prototype directly
- 
*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}
class Child extends Person {
  // not supported yet
  /*   #eyeColor = 'red'; // private property
    // get the eyeColor 
    get eyeColor(){
      return this.#eyeColor 
    } */
  constructor(name, age, gender) {
    super(name, age); // call the constructor of the parent
    this.gender = gender;
  }
  walk() {
    console.log(`child ${this.name} is walking`);
  }
}
const child = new Child(`osama`, 15, `male`);

console.log(`-----------`)
console.log(child instanceof Child)
console.log(child.constructor === Child)
console.log(`-----------`)

/* object destructuring */
const address = {
  street: '15',
  city: 'sohag',
  country: ''
};

const { street: s, city: c } = address;
// console.log(s, c);


/* spread operator*/
// spread operator to clone an object
// const sameAddress = address // modifying the original object will not affect the cloned object
const sameAddress = { ...address }; // modifying the original object will not affect the cloned object
// delete address.country 
// console.log(sameAddress , address)

// spread operator to combine too objects
const combined = { ...address, ...car_objectLiteral, newProperty: 'I Am New??' };
// console.log(address, car_objectLiteral, combined);



/* inheriting using setPropertyOf */
/* const Person23 = {
  talk() {
    return `talking`;
  }
};
const me = new Object();
// console.log(me.talk());
Object.setPrototypeOf(me, Person23);
console.log(me.talk()); */

/* inheriting using setPropertyOf */
/* const Person232 = {
  talk() {
    return `talking`;
  }
};
const me =Object.create(Person232);
console.log(me.talk());
 */



// const pen = {
//   name :`khaled`,
//   talk(){
//     return `${this.name} is talking`
//   }
// }
// // console.log(pen.talk())


/* inheritance */
function Animal() { };
// add all the repeated props and methods in the Animal prototype and reset the constructor
Animal.prototype = {
  constructor: Animal,
  describe: function () {
    console.log("My name is " + this.name);
  }
};

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
let duck = new Bird();
console.log(duck.constructor)

// Object.create(obj):-
// creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe"
// for creating an object. By setting the prototype of animal to be the prototype of Animal,
// you are effectively giving the animal instance the same "recipe" as any other instance of Animal.;

/* Bird inherits Animal and add additional methods
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
*/

/* how to create objects */
/*
- object literal
- new object() 
- object.create() 
- object.assign()
- factory function
*/


// 1:Object Literal
const objMethodOne = {
  property: "1:Object Literal"
};
console.log(objMethodOne.property);

// 2:new Object()
const objMethodTwo = new Object({
  property: "2:new Object()"
});
console.log(objMethodTwo.property);

// 3:Object.create()
const objMethodThree = Object.create({
  property: "3:Object.create()"
});
console.log(objMethodThree.property);

// 4:Object.assign()
const objMethodFour = Object.assign({
  property: "4:Object.assign()"
});
console.log(objMethodFour.property);

// 5:Factory Function
function createObj() {
  return {
      property: "5:Factory Function"
  };
}
const objMethodFive = createObj();
console.log(objMethodFive.property);

// 6:Constructor Function
function ConstructorFunc() {
  this.property = "6:Constructor Function";
}
const objMethodSix = new ConstructorFunc("");
console.log(objMethodSix.property);

// 7:Class
class Class {
  constructor() {
      this.property = "7:Class";
  }
}
const objMethodSeven = new Class("");
console.log(objMethodSeven.property);

