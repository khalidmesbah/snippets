/* function Bear(type) {
    this.type = type;
}
Bear.prototype.growl = function () {
    console.log(`The ${this.type} bear says grrrr`);
};
function Grizzly() {
    Bear.call(this, 'grizzly');
}
Grizzly.prototype = Object.create(Bear.prototype);

const grizzly = new Grizzly();
console.log(grizzly.growl()); */


const objProto = {
    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

function User(fName,lName){
    this.firstName = fName;
    this.lastName = lName;
}
User.prototype = objProto;
User.prototype.constructor = User;

const p = new User(`khaled`,`mesbah`);
console.log(p.constructor)
