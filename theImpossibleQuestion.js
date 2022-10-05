/* https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true */
/* 
- note that some of the code below is just mind blowing🧠🤐 =>🧟
- 
*/

/* 1
let a = { num: 1 };
a.valueOf = function () {
  return this.num++;
};
if (a == 1 && a == 2 && a == 3) console.log(`True`);
*/

/* 2 
var aﾠ = 1;
var a = 2;
var ﾠa = 3;
if(aﾠ==1 && a== 2 &&ﾠa==3) {
    console.log("Why hello there!")
}
*/

/* 3
var a = 1;
var a‍ = 2; //one zero-width character
var a‍‍ = 3; //two zero-width characters (or you can use the other one)
if (a == 1 && a‍ == 2 && a‍‍ == 3) {
  console.log("Why hello there!");
}
*/

/* 4 => deprecated
var i = 0;
with ({
  get a() {
    return ++i;
  },
}) {
  if (a == 1 && a == 2 && a == 3) console.log("wohoo");
}
*/

/* 5
a = [1, 2, 3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3);
*/

/* 6


*/