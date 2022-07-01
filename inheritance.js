// create a constructor function
function Animal() { }

Animal.prototype = { 
  constructor: Animal, // because assigning an object to the constructor function's prototype will cause the constructor property to equal Object
  eat: function () {
    console.log("nom nom nom");
  },
  legs: 4,
};

// create a constructor function for making dogs 
function Dog() { }
// make Dog inherit from Animal 
Dog.prototype = Object.create(Animal.prototype)
// Only change code below this line


let beagle = new Dog();

beagle.eat()
console.log(beagle.legs)
console.log(beagle.constructor === Animal)


// For example, Bird is a constructor that inherits its prototype from Animal:
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;