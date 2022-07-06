/* Notes
- Must call super constructor in derived class before accessing 'this' or returning from derived constructor
 
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
class Novel extends Book{
  constructor(author, type) {
    super(author);
    this.type = type;
  }
  getType() {
    return this.type;
  }
}

const novel = new Novel("anonymous",'adventure');
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);
console.log(novel.getType())