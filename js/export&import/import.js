import def, { add } from "./export.js"; // .js should be included
import { test } from "./export.js";
console.log(add(1, 2, 3, 4, 5));
console.log(def());
console.log(test());
