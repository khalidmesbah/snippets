/* 
- false
- null
- undefined
- NaN
- 0, -0, 0n
- "",'',``
*/

const falsy = [false, null, undefined, NaN, 0, -0, 0n, "", ``, ""];
// or logical operator
falsy.forEach((falso) => console.log(falso || `${falso} => is falsy`));

// nullish coalescing operator => if null or undefined
// sometime we want the 0 number like the score in a game
console.log(`------------`);
falsy.forEach((falso) => console.log(falso ?? `${falso} => is falsy`));
