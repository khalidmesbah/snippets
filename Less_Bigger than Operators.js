/* 
    convert to primitive
    - if string < string =>ascii
    - else convert to number 
        if NaN =>false
        else calc
*/
console.log(`🚀🔥👉 ⚡ "" < 1`, "" < 1);
console.log(`🚀🔥👉 ⚡ "5" < 6`, "5" < 6);
console.log(`🚀🔥👉 ⚡ [] < 0`, [] < 0);
console.log(`🚀🔥👉 ⚡ "" < 0`, "" < 0);
console.log(`🚀🔥👉 ⚡ null < 0`, null < 0);
console.log(`🚀🔥👉 ⚡ Infinity < 0`, Infinity < 0);
console.log(`🚀🔥👉 ⚡ -Infinity < 0`, -Infinity < 0);
console.log(`🚀🔥👉 ⚡ Number(null)`, Number(null));
