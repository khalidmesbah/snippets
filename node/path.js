/* path module
- path resolve => get the absolute path from a relative path
- path normalize => normalizes a path (removing dots, double slashes)
- path join => concatenates strings to create a path that works across different operating systems
*/
const path = require("path");

const windowsFilePath = "app\\src\\routes\\api";
const linuxFilePath = "app/src/routes/api";
const filePath = path.join("app","src","routes","api")

console.log(windowsFilePath);
console.log(linuxFilePath);