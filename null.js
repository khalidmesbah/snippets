console.log(null);
console.log(-null);
console.log(+null);

console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(+null === 0);
console.log(-null === 0);
console.log(-null === +null);

/* null
- no value
- object */
/* undefined
- no value
- undefined */
/* no value && object (== && !==) no value && undefined */
