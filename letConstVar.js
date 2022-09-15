/* function setup(){
    console.log(x)
    var x = 200;
    console.log(x)
}

setup(); // undefined 200
 */
console.log(`=============`);
function setup() {
  let x;
  console.log(x);
  x = 200;
  console.log(x);
}

setup(); // undefined 200
console.log(`=============`);

/* function setup(){
    console.log(x)
    let x = 200;
    console.log(x)
}

setup(); // error */
console.log(`=============`);

// if (1) {
//     let x = 200;
// }

// console.log(x); // error

// if (1) {
//     var x = 200;
// }

// console.log(x); // 200

/* 
    var => function scope and global scope
        => gets hoisted
    let, const => block scope
               => don't get hoisted 

*/

function go() {
  console.log(`going`);
}
go();
function go() {
  console.log(`going again`);
}
// use const to make the function not to be reassigned
{
  for (let i = 0; i < 5; i++) {
    //   i = 2; // => infinite loop
    let i = 2;
    console.log(i);
  }
}
