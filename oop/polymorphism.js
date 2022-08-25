/* benefits */
/* 
- refactor ugly switch case statements
- it can be divided into two broad categories
    - overloading(method overloading)
    - overriding(method overriding)
- js doesn't support method overloading
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
    print() { // method overriding
        // console.log(super.print());
        return `I'm ${this.name}, a ${this.job} and my age is ${this.age}`;
    }
}

const k = new Employee(`khaled`, 21, `SWE`);
console.log(k.print());

class Father {
    constructor(name){
        this.name = name;
    }
    display(){
        console.log(`i am ${this.name}`)
    }
    display(vehicle){ // method overloading
        console.log(`i am driving ${vehicle}`)
    }
}
const f = new Father(`khaled`);
f.display(`car`);