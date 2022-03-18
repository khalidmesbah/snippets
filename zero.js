console.log(`🚀🔥👉 ⚡ -0 - 0`, -0 - 0);
console.log(`🚀🔥👉 ⚡ -0 + -0`, -0 + -0);
console.log(`🚀🔥👉 ⚡ -0 - 0`, -0 - 0);
console.log(`🚀🔥👉 ⚡ 0 - -0`, 0 - -0);
console.log(`🚀🔥👉 ⚡ +-0`, +-0);
console.log(`🚀🔥👉 ⚡ +"-0"`, +"-0");
console.log(`🚀🔥👉 ⚡ -+0`, -+0);
console.log(`🚀🔥👉 ⚡ - -0`, - -0);
console.log(`🚀🔥👉 ⚡ 0 + -0`, 0 + -0);
console.log(`🚀🔥👉 ⚡ -0 + 0`, -0 + 0);
console.log(`🚀🔥👉 ⚡ -0 - -0`, -0 - -0);
console.log(`🚀🔥👉 ⚡ -6 % 2`, -6 % 2);
console.log(`🚀🔥👉 ⚡ 1 / -0`, 1 / -0);
console.log(`🚀🔥👉 ⚡ 1 / 0`, 1 / 0);

console.log(`🚀🔥👉 ⚡ 0 > -0`, 0 > -0);
console.log(`🚀🔥👉 ⚡ 0 === -0`, 0 === -0);

console.log(`🚀🔥👉 ⚡ Object.is(1, 1)`, Object.is(1, 1));
console.log(`🚀🔥👉 ⚡ Object.is(0, -0)`, Object.is(0, -0));

// => then how to differntiate between 0 and -0

const zeroType = (zero) => {
  if (1 / zero === Number.NEGATIVE_INFINITY) return -0;
  return 0;
};

console.log(`🚀🔥👉 ⚡ zeroType(-0)`, zeroType(-0));
console.log(`🚀🔥👉 ⚡ zeroType(0)`, zeroType(0));