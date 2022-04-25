/* - Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
- we can use bracket notation to access a property when it's name is a string that contains a whitespace,
 Another use of bracket notation on objects is to access a property which is stored as the value of a variable.
  This can be very useful for iterating through an object's properties or when accessing a lookup table.
Another way you can use this concept is when the property's name is collected dynamically during the program execution */
const obj = {
  1: "number one",
  name: "khaled",
  age: 21,
  "college & university": "faculty of science, sohag university",
  qoute: "work hard",
};
// name: "khaled" => property = key + value 
// name => key
// "khaled" =>value
const prop = "name";
// dot notation
console.log(obj.name);
console.log(obj.age);
// bracket notation
console.log(obj[1]);
console.log(obj["1"]);
console.log(obj["qoute"]);
console.log(obj["college & university"]);
console.log(obj[prop]);
// modify a property
obj.name = "Khalid";
console.log(obj);
// add a new property
obj.newProp = "new";
console.log(obj);
// delete a property
delete obj.newProp;
console.log(obj);
// hasOwnProperty
function checkObj(obj, checkProp) {
  // Only change code below this line
  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
  // Only change code above this line
}
console.log(checkObj(obj, 1));
obj.arr=[];
obj.arr.push("loda")
console.log(obj)