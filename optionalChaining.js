const obj = {
    name: `khaled`,
    age: 21,
};

console.log(obj?.name);
console.log(obj?.age);
console.log(obj?.country || `property doesn't exist`);
/* ==== 
if (obj.country) {
    console.log(obj.country);
} else {
    console.log(`property doesn't exist`);
} */


// return undefined instead of error 