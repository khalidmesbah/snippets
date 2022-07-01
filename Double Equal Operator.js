/* 
    if null == undefined => true
    if string == number => convert string to number to decide
    if boolean/object == primitive => convert boolean/object to primitive to decide
    else false
*/

/* 
     primitive data types:-
     - string
     - number 
     - bigInt
     - boolean
     - undefined
     - null
     - symbol

*/
console.log(`🚀🔥👉 ⚡ null == undefined`, null == undefined);
console.log(`🚀🔥👉 ⚡ true == 5`, true == 5);
// compare the addresses of the two arrays not the values & of course they are different
console.log(`🚀🔥👉 ⚡ [] == []`, [] == []);
let x = [];
// same addresses
console.log(`🚀🔥👉 ⚡ x = [], x == x`, x == x);
console.log(`🚀🔥👉 ⚡ [] == ![]`, [] == ![]); // [] == false , "" == false , "" == 0 , 0 == 0 , true
console.log(`================================`)
console.log(`🚀🔥👉 ⚡ [5] == ![5]`, [5] == ![5]);
console.log(`🚀🔥👉 ⚡ [5] == false`, [5] == false);
console.log(`🚀🔥👉 ⚡ '5' == false`, '5' == false);
console.log(`🚀🔥👉 ⚡ '5' == 0`, '5' == 0);
console.log(`🚀🔥👉 ⚡ 5 == 0`, 5 == 0);
console.log(`================================`)
console.log(`🚀🔥👉 ⚡ !true == []`, !true == []);
console.log(`🚀🔥👉 ⚡ false == []`, false == []);
console.log(`🚀🔥👉 ⚡ false == ''`, false == '');
console.log(`🚀🔥👉 ⚡ false == false`, false == false);