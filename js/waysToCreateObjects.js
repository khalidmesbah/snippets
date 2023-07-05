/* how to create objects */
/*
- object literal
- new object() 
- object.create() 
- object.assign()
- factory function
*/


// 1:Object Literal === literal notation === initializer notation
const objMethodOne = {
    property: "1:Object Literal"
};
console.log(objMethodOne.property);

// 2:Object constructor()
const objMethodTwo = new Object({
    property: "2:new Object()"
});
console.log(objMethodTwo.property);

// 3:Object.create()
const objMethodThree = Object.create({
    property: "3:Object.create()"
});
console.log(objMethodThree.property);

// 4:Object.assign()
const objMethodFour = Object.assign({
    property: "4:Object.assign()"
});
console.log(objMethodFour.property);

// 5:Factory Function
function createObj() {
    return {
        property: "5:Factory Function"
    };
}
const objMethodFive = createObj();
console.log(objMethodFive.property);

// 6:Constructor Function
function ConstructorFunc() {
    this.property = "6:Constructor Function";
}
const objMethodSix = new ConstructorFunc("");
console.log(objMethodSix.property);

// 7:Class
class Class {
    constructor() {
        this.property = "7:Class";
    }
}

const objMethodSeven = new Class("");
console.log(objMethodSeven.property);

// 8:Spread Operator
const objMethodEight = { ...objMethodSeven };
objMethodEight.property = `8:Spread Operator`;
console.log(objMethodEight.property);

// 9:Singleton Pattern
const objMethodNine = new (function SingletonPattern() {
    this.property = `9:Singleton Pattern`;
})();
console.log(objMethodNine.property);