const a = function (x) {
  this.x = x;
};

const b = function (y) {
  this.y = y;
};
console.log(a.prototype)

const newB = new b(`x`,`y`);

// newB.getX(); // x
// newB.getY(); // y
