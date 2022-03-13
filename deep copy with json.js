const person = {
  name: "khaled",
  age: 21,
  skills: ["Programming", "Cooking", "Football"],
};

// const personCopy = person;// shollow copy ,personCopy references person , they are the same , not a copy
const personCopy = JSON.parse(JSON.stringify(person)); // a correct copy

console.log(person);
console.log(`=================`);
console.log(personCopy);
console.log(`=================`);
console.log(person === personCopy);
