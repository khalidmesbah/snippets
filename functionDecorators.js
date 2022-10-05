/* 
-> function decorator: a function that returns a function that sets a key-value pair on an object
-> 
*/

const car = { wheels: 4 };
function paint(color) {
  // paint if the function decorator
  return function (car) {
    car.color = color;
  };
}

paint("red")(car);
paint("green")(car);

console.log(car);

/* with classes */
function Car() {
  const car = { wheels: 4 };
  paint("yellow")(car);
  return car;
}

const myCar = new Car();
console.log(myCar)