const myPromise0 = new Promise((res, rej) => {
  Math.floor(Math.random() * 1000000) % 2 === 0 ? res(`success`) : rej(`fail`);
});
const myPromise1 = new Promise(function (res, rej) {
  setTimeout(function () {
    const randomBoolean = Math.floor(Math.random() * 2);
    (randomBoolean) ? res(`success`) : rej(`fail`);
  }, 0);
});
myPromise0.then(res => console.log(res)).catch(err => console.log(err));
myPromise1.then(res => console.log(res)).catch(err => console.log(err));