import Book from './BookClass.js';

class Novel extends Book {
    constructor(author, type) {
        super(author);
        this.type = type;
    }
    getType() {
        return this.type;
    }
}

const novel = new Novel("anonymous", 'adventure');
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);
console.log(novel.getType());