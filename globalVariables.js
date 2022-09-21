var x = 10;
function f() {
    y = 100; // global variable - global scope
    console.log(x, y);
}
function f2() {
    var z = 100; // local variable - local scope
    console.log(x, z);
}
f();
f2();
console.log(x, y, z);