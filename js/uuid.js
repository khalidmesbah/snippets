const crypto = require("crypto");

if (crypto) {
  let id;
  if ("randomUUID" in crypto) {
    console.log("randomUUID");
    id = crypto.randomUUID();
  } else {
    console.log("getRandomValues");
    id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.webcrypto.getRandomValues(new Uint8Array(1))[0] &
          (15 >> (c / 4)))
      ).toString(16)
    );
    //in the browser it is crypto.getRandomValues(new Uint8Array(1))[0]
  }
  console.log(id);
} else {
  console.log("no support for crypto");
}
