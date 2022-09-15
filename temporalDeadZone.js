/* Temporal dead zone
- the period when the variable is declared(named in the memory) but not assigned to a value
- variables declared with let and const are stored in it in the creation phase
*/
console.log(x) // in the temporal dead zone
// in the temporal dead zone
// in the temporal dead zone
const a = 20; // x is in the temporal dead zone
// in the temporal dead zone
// in the temporal dead zone
var x = 20; // end of Temporal dead zone
console.log(x)
var s;
let ss;
console.log(s)
console.log(ss)

