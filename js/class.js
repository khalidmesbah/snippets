/* Notes
- Must call super constructor in derived class before accessing 'this' or returning from derived constructor
- if a method is acting like a property use get
- if a method changes some thing in the class use set
- you can't make a getter with same name as a property
 */
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

/* 
Notice the syntax used to invoke the getter and setter.
 They do not even look like functions.
  Getters and setters are important because they hide internal implementation details.
 */
/* 
 It is convention to precede the name of a private variable with an underscore (_).
  */

/* inheritance  */
class Novel extends Book {
  constructor(author, type) {
    super(author);
    this.type = type;
  }
  getType() {
    return this.type;
  }
}

const novel = new Novel("anonymous", "adventure");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);
console.log(novel.getType());

/* named class expression */
console.log(`🚀 ~ named class expression`);
var Square = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

const square = new Square(5, 5);
const poster = new Square(2, 3);

console.log(square.height);
/* unnamed class expression */
console.log(`🚀 ~ unnamed class expression`);

var Square2 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
const square2 = new Square2(5, 5);
const poster2 = new Square2(2, 3);

console.log(square2.height);
