let add;
if (true) {
  const { default: def, add, test } = await import("./export.js");
  console.log(add(1, 2, 3));
  console.log(def, test);
}
