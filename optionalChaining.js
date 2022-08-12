const obj = {
    name: `khaled`,
    age: 21,
};

console.log(obj?.name, obj && obj.name);
console.log(obj?.age);
console.log(obj?.country || `property doesn't exist`);
/* ==== 
if (obj.country) {
    console.log(obj.country);
} else {
    console.log(`property doesn't exist`);
} */


// return undefined instead of error 
console.log(`--------------------`);
const x = {
    // profile : {
    //     name : "khaled"
    // }
};
console.log(x && x.profile && x.profile.name);
console.log(x?.profile?.name);