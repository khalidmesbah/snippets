"use strict"
const obj = {
  x:40,
  regularF: function() {
    console.log("regularF function", this)
    return () => {
      console.log("regularF function -> arrow", this)
      return function() {
        console.log("regularF function -> arrow -> regular",this)
      }
    }
  }
}
obj.regularF()()();
console.log(`Global--------------`)
const func = obj.regularF;
func()()();

