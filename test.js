/* function sumRange(n) {
    console.log(n)
    if (n === 0) return ``;
    return n + sumRange(--n);
}

const a = sumRange(5);
console.log(a); */


const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.sort(() => Math.random() - 0.5);
console.log(arr);