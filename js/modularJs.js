/* inherit function */
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
}
/* inherit function */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.print = function () {
  console.log(this.name, this.age, this?.love);
};
function Freind(name, age, love) {
  Freind.super_.call(this, name, age);
  this.love = love;
  // this.whatLove= function(){
  //   console.log(this.love);
  // }
}
Freind.prototype.whatLove = function () {
  console.log(this.love);
};
inherits(Freind, Person);
var jon = new Person("jon", 21);
var alex = new Person("alex", 21);
var khaled = new Freind("khaled", 21, "cats");
jon.print();
alex.print();
khaled.print();
// console.log(khaled.prototype);
khaled.whatLove();
