const fs = require("fs");
console.log(process.argv);
console.log(process.cwd());
(() => {
  const fileName = process.argv[2];
  fs.writeFileSync(`${process.cwd()}/${fileName}`, "<h1>khaled</h1>");
})();

// credit for https://youtu.be/e1KJ47tyCso