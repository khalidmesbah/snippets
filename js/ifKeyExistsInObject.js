const obj = {
  name: "khaled",
};
const key = "id";
console.log(Object.keys(obj).includes(key));
console.log(obj.hasOwnProperty(key));
console.log(Object.hasOwn(obj, key));
console.log(key in obj)
console.log(Reflect.has(obj,key))
