/* const cache = new Map();
function square(n) {
    if (cache.has(n)) return cache.get(n);
    let res = 0;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            res++;
    cache.set(n, res);
    return res;
}
console.log(square(100000))
console.log(square(100000))  */

/**
 *
 *
 * @param {*} n
 * @param {*} [cache=new Map([[0, 0], [1, 1]])]
 * @return {*} 
 */
function fib(n, cache = new Map([[0, 0], [1, 1]])) {
    if (cache.has(n)) return cache.get(n);
    cache.set(n, fib(n - 1, cache) + fib(n - 2, cache));
    return cache.get(n);
}

console.log(fib(41));