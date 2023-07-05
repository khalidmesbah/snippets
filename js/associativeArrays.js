/* NOTES
- they don't have a length property because they aren't arrays, they  are objects
- they uses strings as indexes instead of numbers
- 

*/
const arr = new Array();
arr["name"] = "khaled";
arr["age"] = 21;
arr["school"] = "science";
console.log(Array.isArray(arr));
console.log(arr); // => arr is an associative array
console.log(arr.age);
console.log(arr.name);
console.log(arr["school"]);
console.log(`=>looping over an associative array---------------`);
for (const i in arr) console.log(i, arr[i]);

console.log(`---------------------`);

 

