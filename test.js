function solution(input, markers) {
  let res = "";
  let skip = false;
  for (let i = 0; i < input.length; i++) {
    if (markers.includes(input[i])) {
      skip = true;
      res = res.slice(0, res.length - 1); 
    }
    if (input[i].startsWith("\n")) skip = false;
    if (!skip) res += input[i];
  }
  return res.trimEnd();
}
console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
    "#",
    "!",
  ]) === "apples, pears\ngrapes\nbananas"
);
console.log(`-----------`);
console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
    .length
);
console.log(`-----------`);
console.log("apples, pears\ngrapes\nbananas".length);
// result should == "apples, pears\ngrapes\nbananas"
