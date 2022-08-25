/* benefits */
/* 
- reduce complexity
- increase reusability
- wrapping data and functions together
*/

/* class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get getName() {
        return this.#name;
    }
    set setName(newName) {
        this.#name = newName;
    }
    get getAge() {
        return this.#age;
    }
    set setAge(newAge) {
        this.#age = newAge;
    }
    print() {
        return `I'm ${this.#name} and my age is ${this.#age}`;
    }
}

const p = new Person(`khaled`, 21);
console.log(p.getName); */


/* these functions and variables are not encapsulated */
let baseSalary = 3000;
let overTime = 10;
let rate = 20;
function getWage(baseSalary, overTime, rate) {
    return baseSalary + overTime * rate;
}

/* these are encapsulated */
const employee = {
    baseSalary: 3000,
    overTime: 10,
    rate: 20,
    getWage() {
        return `${this.baseSalary + this.overTime * this.rate}`;
    }
};
console.log(employee.getWage());