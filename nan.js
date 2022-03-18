// implementing the nan function
const isNan = (n) => {
  if (n === n) return false;
    return true;
};
console.log(`🚀🔥👉 ⚡ typeof NaN`, typeof NaN);
console.log(`🚀🔥👉 ⚡ NaN == NaN`, NaN == NaN);
console.log(`🚀🔥👉 ⚡ Number.isNaN(NaN)`, Number.isNaN(NaN));
console.log(`🚀🔥👉 ⚡ isNaN(5)`, isNaN(5));
console.log(`🚀🔥👉 ⚡ isNan(5)`, isNan(5));
console.log(`🚀🔥👉 ⚡ isNaN(NaN)`, isNaN(NaN));
console.log(`🚀🔥👉 ⚡ isNan(NaN)`, isNan(NaN));

