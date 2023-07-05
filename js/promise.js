/* NOTES
- a promise is an object
- catch is used to catch unhandled errors in thens
- then is returns a promise that's why we can chain it to another then
- catch === then(null,callbackFunction)
- finally doesn't take any parameters and its return doesn't do any thing but throwing errors will do things
- throwing error in finally will make it's way to the first error handler whether it's a catch or an error handler inside then
- finally is a cleaner function, takes no parameters, it's errors go to the nearest error handler even inside a then, it's return is ignored
- a promise has 3 states {pending,fulfilled,rejected}
- fetch returns a promise
- promise.all => takes an array of asynchronous operations(multiple promises), if one fail it will reject otherwise it will resolve : returns an array of the fulfilled promises
- promise.race => returns the the fastest(rejected or fulfilled)
- promise.any => returns the first fulfilled
*/

// const promiseX = Promise.resolve(`2`)
// const promiseY = Promise.reject(`2`)
// console.log(promiseX,promiseY);

// const myPromise0 = new Promise((res, rej) => {
//   Math.floor(Math.random() * 1000000) % 2 === 0 ? res(`success`) : rej(`fail`);
// });
// const myPromise1 = new Promise(function (res, rej) {
//   setTimeout(function () {
//     const randomBoolean = Math.floor(Math.random() * 2);
//     (randomBoolean) ? res(`success`) : rej(`fail`);
//   }, 0);
// });
// myPromise0.then(res => console.log(res)).catch(err => console.log(err));
// myPromise1.then(res => console.log(res)).catch(err => console.log(err));

// function executer(resolve, reject) {
//   if (Math.floor(Math.random() * 2)) resolve(`resolve`);
//   else reject(new Error(`reject`));
// }
// const promise = new Promise(executer);
// promise.then(console.log, console.error); // handle error inside then
// promise
//   .finally(() => {
//     console.log(`finally start`);
//     return `this has no affect`; // has no effect
//   })
//   .then(res => {
//     console.log(res);
//     return res; // you should return something to the next then
//   })
//   .finally(() => {
//     console.log(`finally middle`);
//     throw new Error(`error from finally`);
//   })
//   .then(res => console.log(res + ` from second then`))
//   // .then(null, err => console.log(err + ` from then(Null,callbackFunction)`)) // same as the line below
//   .catch(err => console.log(err + ` from catch`))
//   .finally(() => console.log(`finally end`));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error))
//   .finally(console.log(`start`)) // will be in the beginning
//   .finally(() => console.log(`end`));

/* multiple promises */
/* const url1 = `https://jsonplaceholder.typicode.com/todo/30`;
const url2 = `https://jsonplaceholder.typicode.com/post/20`;
const allPromises = Promise.all([fetch(url1), fetch(url2)]);
console.log(allPromises);
allPromises
  .then((res) => {
    return Promise.all(
      res.map((res) => {
        return res.json();
      })
    );
  })
  .then((data) => console.log(data))
  .catch(console.error); */

/* Async/Await */
// async function f() {
//   // return 2;
//   return Promise.resolve(2);
// } // it will always returns a promise because of 'async'
// f().then((res) => console.log(res));

/* Promise executer syntax */
let promise = new Promise(
  /* executer */ (resolve, reject) => {
    const logic = false;
    if (logic) resolve("success");
    reject("failure");
  }
);
/* Promise consumer syntax */
promise
  .then(
    (result) => console.log("result"),
    (error) => console.log("error")
  )
  .catch((error) => console.log(error));
