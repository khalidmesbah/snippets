/* what is this pattern 
- most used design pattern
- revealing module pattern = IIFE(namespace) + Closures(encapsulation)
*/
/* Advantages
- provides encapsulation and abstraction
- self-contained independent components

*/

let customNameSpace = (function(){
    function fun1(){
        console.log(`fun1`)
    }
    function fun2(){
        console.log(`fun2`)
    }
    function fun3(){
        console.log(`fun3`)
    }
    return {
        fun1,
        fun3
    }
})()

let supportNameSpace = (function(){
    function f1(){
        console.log(`f1`)
    }
    function f2(){
        console.log(`f2`)
    }
    function f3(){
        console.log(`f3`)
    }

})()