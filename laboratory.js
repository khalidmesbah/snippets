const curried = (x) => (y) => x + y
console.log(curried(1)(2))
