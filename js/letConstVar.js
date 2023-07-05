/* 
+ var
  - function scope
  - gets hoisted
  - can be reassigned
  - can be redeclared
+ let
  - block scope
  - doesn't get hoisted
  - can be reassigned
  - cannot be redeclared
  - bind the value of variables to what they are at the time they are defined
+ const
  - block scope
  - doesn't get hoisted
  - cannot be reassigned
  - cannot be redeclared

*/

// bind the value of variables to what they are at the time they are defined
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}
