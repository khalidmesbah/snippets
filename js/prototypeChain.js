const methods = {
  makeSound: function () {
    return this.sound;
  },
};

function Pet(name) {
  this.name = name;
  this.sound = "Roar!!";
}

Pet.prototype.makeSound = function () {
  return this.sound;
};

function Dog(name) {
  Pet.call(this.name);
}

// Dog.prototype = Object.create(Pet.prototype);
// Dog.prototype.constructor = Dog;

Object.setPrototypeOf(Dog.prototype, Pet.prototype);

console.log(Dog.prototype);

var rudy = new Dog("Rudy");
console.log(rudy.makeSound());
var sparky = new Dog("Sparky");
console.log(sparky.makeSound());

console.log(rudy.makeSound === sparky.makeSound);
