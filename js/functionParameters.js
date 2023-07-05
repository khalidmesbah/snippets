// default parameters
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
// const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting());
console.log(`=========================`);
// rest parameters
function howMany(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));
