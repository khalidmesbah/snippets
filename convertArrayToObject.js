const arr = [`khaled`, `gaber`, `mesbah`, `loda`];
const obj = {};

for (entry of arr.entries()) obj[entry[0]] = entry[1];
console.log(obj);
console.log(Object.fromEntries(arr.entries()));
console.log({ ...arr });
