/* const hex = `#ff00ff`;
const hexNumbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
};
const hexPortionToNumber = (portion) => {
    let len = 1;
    return portion.split('').reduce((a, c,) => {
        a += (Number.isInteger(+c) ? +c : hexNumbers[c]) * 16 ** len--;
        return a;
    }, 0);
};
const hexToRgb = (hex) => {
    const rgb = hex.match(/\w{2}/gi);
    const r = hexPortionToNumber(rgb[0]);
    const g = hexPortionToNumber(rgb[1]);
    const b = hexPortionToNumber(rgb[2]);
    return `(${r},${g},${b})`;
};
console.log(hexToRgb(hex));
 */

const getComplementHex = (hex) => {
    hex = hex.slice(1);
    const hexSystem = `fedcba9876543210`;
    let complementHex = `#`;
    for (let i = 0; i < hex.length; i++) {
        complementHex += hexSystem[hexSystem.length - 1 - hexSystem.indexOf(hex[i])];
    }
    return complementHex;
};
console.log(getComplementHex(`#aae451`));
console.log(getComplementHex(`#f00f00`));
console.log(getComplementHex(`#ff00ff`));
console.log(getComplementHex(`#111111`));
console.log(getComplementHex(`#ffffffffffffff`));
console.log(getComplementHex(`#0`));