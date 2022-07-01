// const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
