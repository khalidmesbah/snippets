let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.filter(e => e % 2));//odd
console.log(arr.filter(e => !(e % 2)));//even
console.log(arr.filter(e => e % 2 ? 0 : 1));//even