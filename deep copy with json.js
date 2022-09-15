const person = {
  name: "khaled",
  age: 21,
  skills: ["Programming", "Cooking", "Football"],
};

// const personCopy = person;// shollow copy ,personCopy references person , they are the same , not a copy
const personCopy = JSON.parse(JSON.stringify(person)); // a correct copy
const personCopy2 = Object.assign({}, person);
console.log(person);
delete person.name;
console.log(person);
console.log(`=================`);
console.log(personCopy);
console.log(personCopy2);
console.log(`=================`);
console.log(person === personCopy);
console.log(person === personCopy2);
