const falsy = [false, 0, -0, "", null, undefined, NaN, 0n];
// or logical operator
falsy.forEach((falso) => console.log(falso || `${falso} => that is falsy`));
// nullish coalescing operator => if null or undefined
// sometime we want the 0 number like the score in a game
falsy.forEach((falso) => console.log(falso ?? `${falso} => that is falsy`));
