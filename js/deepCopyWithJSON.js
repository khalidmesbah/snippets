const person = {
  name: "khaled",
  age: 21,
  skills: ["Programming", "Cooking", "Football"],
};

// const personCopy = person;// personCopy references person , they are the same , not a copy

const personCopy = JSON.parse(JSON.stringify(person)); // a correct copy

const personCopy2 = Object.assign({}, person);

const personCopy3 = { ...person }; // shallow copy, nested objects in personCopy3 still mantians the reference to their original object

const personCopy4 = structuredClone(person); // the brand new way ==> the best

console.log(`1=================`);
person.name = "loda";
person.skills[0] = "loda";
console.log(personCopy4);
console.log(person);
console.log(`=================`);

/* console.log(`shallow Copy=================`);
person.skills[0] = "loda";
console.log(person)
console.log(personCopy3)
console.log(`shallow Copy=================`); */

console.log(person);
delete person.name;
console.log(person);
console.log(`=================`);
console.log(personCopy);
console.log(personCopy2);
console.log(`=================`);
console.log(person === personCopy);
console.log(person === personCopy2);
