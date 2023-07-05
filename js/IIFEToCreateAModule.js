let motionModule = (function () {
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
    },
  };
})();

let duck = new Object();

motionModule.flyMixin(duck);
duck.fly();

let man = new Object();

motionModule.glideMixin(man)
man.glide()