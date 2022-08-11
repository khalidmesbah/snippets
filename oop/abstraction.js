/* benefits */
/* 
- simpler interface
- reduce the impact of change
- hide the details & show the essentials
*/
/* no abstraction */
function CircleBad(r) {
    this.radius = r;
    this.defaultLocation = { x: 0, y: 0 };
    this.computeOptimalLocation = function () {
        return `...........`;
    };
    this.draw = function () {
        this.computeOptimalLocation();
        console.log(`draw.`);
    };
}

/* abstraction */
function CircleGood(r) {
    this.radius = r;
    let defaultLocation = { x: 0, y: 0 }; // private property
    Object.defineProperty(this, `defaultLocation`, { 
        get: function () { // getter 
            return defaultLocation;
        },
        set: function (newDefaultLocation) { // setter 
            if(newDefaultLocation.constructor !== Object) throw new Error(`This is not an object`)
            defaultLocation = newDefaultLocation;
        },
    });
    const computeOptimalLocation = function () { // private method
        return `...........`;
    };
    this.draw = function () {
        computeOptimalLocation(0.1);
        console.log(`draw.`);
    };
}
const c = new CircleGood(5);
console.log(c.radius);
c.defaultLocation = { x: 2, y: 3 };
console.log(c.defaultLocation);
console.log(c.draw());
