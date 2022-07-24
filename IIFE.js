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
