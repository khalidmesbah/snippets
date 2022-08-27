/* 
- inheritance in javascript is done using the prototype object
- inheritance in javascript is object based
- every js object has a prototype object
*/


function Employee(name){
  this.name = name;
  this.doWork = function(){
    console.log(`doing work`)
  },
  this.attend = function(){
    console.log(`attending`)
  }
}
function Manager(name,cabin){
  this.cabin = cabin;
  this.doWork = function(){
    console.log(`managing`)
  }
}
Manager.prototype = new Employee();
Manager.prototype.constructor = Manager;

var m = new Manager(`khaled`,`cabini`);
m.doWork()
m