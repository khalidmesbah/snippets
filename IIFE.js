/*
- used to assign complex Values to variables 
- avoid name collision
*/
const complexVar = (() => {
  const a = 10;
  const b = 20;
  let res;
  res = a * b * 2;
  res + 1;
  res++;
  res = res / 2;
  res -= 0.5;
  return res;

})();

console.log(complexVar);

/* useful for data privacy */

const fun = (() => {
  return `hello`;
})();
console.log(fun);

// Use an IIFE to Create a Module
let motionModule = (function () { // group mixins together
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function (obj) {
      obj.fly = function () {
        console.log("Flying, wooosh!");
      };
    }
  };
})();
// usage
// motionModule.glideMixin(duck);
// duck.glide();



/* save name collision */

(function () {
  console.log(`welcome`);
})();
var welcome = `welcome`;
