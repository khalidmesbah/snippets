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
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);
/* 
Notice the syntax used to invoke the getter and setter.
 They do not even look like functions.
  Getters and setters are important because they hide internal implementation details.
 */
/* 
 It is convention to precede the name of a private variable with an underscore (_).
  */
