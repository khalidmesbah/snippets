class Book {
    constructor(author) {
        this._author = author;
    }
    get writer() {
        return this._author;
    }
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
export default Book