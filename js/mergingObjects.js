/* 
Shallow cloning or merging objects is possible with another operator called Object.assign().
 */

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 5 };
const merge = (...objects) => ({ ...objects });
const realMerge = (...objects) => objects.reduce((a, c) => Object.assign(a, c));

let merged = { ...obj1, ...obj2 };
console.log(`🚀 ~ merged`, merged);

let mergedObj = merge(obj1, obj2);
console.log(`🚀 ~ mergedObj`, mergedObj);
mergedObj = realMerge(obj1, obj2);
console.log(`🚀 ~ mergedObj`, mergedObj);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge({}, obj1, obj2);
console.log(`🚀 ~ mergedObj2`, mergedObj2);
mergedObj2 = realMerge({}, obj1, obj2);
console.log(`🚀 ~ mergedObj2`, mergedObj2);

// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }
