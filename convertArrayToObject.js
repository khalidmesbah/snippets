const arr = [`khaled`, `gaber`, `mesbah`, `loda`];
// console.log(`🚀🔥👉 ⚡ arr`, arr);
const arrEntries = arr.entries();
// console.log(`🚀🔥👉 ⚡ arrEntries`, arrEntries);
// console.log(`🚀🔥👉 ⚡ [...arrEntries]`, [...arrEntries]);
const obj = {};
for (entry of arrEntries) {
    // console.log(`🚀🔥👉 ⚡ entry`, entry);
    obj[entry[0]] = entry[1];
}

console.log(`🚀🔥👉 ⚡ obj`, obj);

console.log(Object.fromEntries(arr.entries()));