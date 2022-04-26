- `arr[0]` is the same as `arr [0]` and as `arr [0] [1] [2]`
- .push() takes one or more parameters and "pushes" them onto the end of the array.
  - `myArray.push(["dog",3],["khaled",3])` 
-  the equality operator attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
- the less than operator converts data types while comparing.
- the less than or equal to operator converts data types.
- in the switch statements: the case values are tested with strict equality (===).
- A default statement should be the last case.
- if your object has any non-string properties, JavaScript will automatically typecast them as strings.
- JSON is a related data interchange format used to store data.
- The conditional operator, also called the ternary operator, 
- arrays and functions are objects
- objects (including arrays and functions) assigned to a variable using const are still mutable
- Using the const declaration only prevents reassignment of the variable identifier.
- you can mutate the object
- const declaration alone doesn't really protect your data from mutation
- to prevent objects mutation use Object.freeze(obj) 
- he spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:`const spreaded = ...arr;` but this will work `let arr2 = [...arr1];`
- Use Destructuring Assignment to Assign Variables from Objects
```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```
- Use Destructuring Assignment to Assign Variables from Nested Objects
```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
const { johnDoe: { age, email }} = user;
const { johnDoe: { age: userAge, email: userEmail }} = user;
```
- Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
// The console would display the values 1, 2 and [3, 4, 5, 7].
```
- Use Destructuring Assignment to Pass an Object as a Function's Parameters
```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  }
// This effectively destructures the object sent into the function. This can also be done in-place:
const profileUpdate = ({ name, age, nationality, location }) => {}
```
- Write Concise Object Literal Declarations Using Object Property Shorthand
```js
const getMousePosition = (x, y) => ({ x, y });
// {x:1, y:2}
```
- ES6 provides a new syntax to create objects, using the class keyword. It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
```js
// In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
// The class syntax simply replaces the constructor function creation:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
// It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
```
- A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.
```html
<script type="module" src="filename.js"></script>
```
- Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. 
  -  The then method is executed immediately after your promise is fulfilled with resolve.
  -  The catch is executed immediately after a promise's reject method is called.
```js
const myPromise = new Promise((resolve, reject) => {
  if (Math.floor(Math.random() * 2)) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```