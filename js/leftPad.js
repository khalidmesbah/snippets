function leftPadSlow(str, len, ch) {
  return (
    new Array(len - str.length).fill(!ch && ch !== 0 ? " " : ch).join("") + str
  );
}

function leftPadFast(str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = " ";
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}

function run(fn, count, ...args) {
  const start = performance.now();

  for (let i = 0; i < count; ++i) {
    fn.apply(null, args);
  }

  return performance.now() - start;
}

[10, 100, 1000, 100000000].forEach((x) => {
  [1, 100, 1000, 100000000].forEach((y) => {
    console.log("leftPadSlow", x, y, run(leftPadSlow, x, "foo", y));
  });
  [1, 100, 1000, 100000000].forEach((y) => {
    console.log("leftPadFast", x, y, run(leftPadFast, x, "foo", y));
  });
});
