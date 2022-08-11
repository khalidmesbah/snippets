/* benefits */
/* 
- eliminate redundant code
- follow the dry principle
- 
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        return `I'm ${this.name} and my age is ${this.age}`;
    }
}

class Employee extends Person {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
    print() {
        console.log(super.print());
        return `I'm ${this.name}, a ${this.job} and my age is ${this.age}`;
    }
}

const k = new Employee(`khaled`, 21, `SWE`);
console.log(k.print());
