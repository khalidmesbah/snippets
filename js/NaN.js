console.log(1 / 0);
console.log(0 / 0);
console.log(-1 / 0);
console.log(1 / 0 * 0);
console.log(1 / 0 * 1);
console.log(1 / 0 * -1);
console.log(1 / 0 * 1 + 1 / 0 * 1);
console.log(1 / 0 * 1 - 1 / 0 * 1);
console.log(1 / 0 * 1 * (1 / 0 * 1));
console.log(1 / 0 * 1 / (1 / 0 * 1));
console.log(0 / Infinity);
console.log(0 * Infinity);

/* NaN */
console.log(`------------NaN------------`);
console.log(Infinity - Infinity);
console.log([1] * [2]);
console.log([1,2] * [2]);
console.log(1 / 0 * 0);
console.log(Infinity * 0);
console.log(0 / 0);
console.log(Infinity / Infinity);
console.log(Infinity % Infinity);
console.log(1 - "string"); // console.log(1 - "1") === 0
console.log(-'string');
console.log(+'string');
console.log(-`NaN`);
console.log(+`NaN`);
console.log(NaN);
console.log(Number(NaN));
console.log(Number("string"));
console.log(-NaN);
console.log(+NaN);
console.log(parseFloat("string"));
console.log(parseInt("string"));
console.log('hi' / 3);
console.log(Math.sqrt(-1))
console.log(Math.sqrt(NaN))
console.log(`----------------`);
const v = NaN;
console.log(Number.isNaN("khaled"));
console.log(isNaN("khaled"));
console.log(Number.isNaN(v));
console.log(isNaN(v));

/* // implementing the nan function
console.log(`🚀🔥👉 ⚡ implementing the nan function`);
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
 */


/*
console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(Object.is(NaN, NaN))
console.log([NaN].indexOf(NaN))
console.log([NaN].includes(NaN))
console.log(Math.max(NaN, 1))
console.log(Math.min(NaN, 1))
console.log(Math.min(NaN, Infinity))

*/