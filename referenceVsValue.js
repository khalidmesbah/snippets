console.log(`-----------string-----------`);
const str1 = `sina`;
const str2 = new String(`sina`);
console.log(str1 === `sina`);
console.log(str2 === `sina`);

console.log(`-----------number-----------`);
const num1 = 1;
const num2 = new Number(1);

console.log(num1 === 1, typeof num1);
console.log(num2 === 1, typeof num2);

function incrementBy10(num){
    num = 1000
}
incrementBy10(1) /// passed by value not by reference
console.log(num1)

console.log(`-----------objects-----------`);
const obj1 = {
    name: `khaled`,
    age: 21
};
const obj2 = new Object({
    name: `khaled`,
    age: 21
});



console.log(obj1 === {});
console.log(obj2 === {});

console.log(JSON.stringify(obj1) === JSON.stringify({
    name: `khaled`,
    age: 21
}));
console.log(JSON.stringify(obj2) === JSON.stringify({
    name: `khaled`,
    age: 21
}));


function incrementAgeBy10(obj){
    obj.age+=10
}
incrementAgeBy10(obj1) /// passed by reference not by value 
console.log(obj1)