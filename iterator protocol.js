let str = 'khaled';
const iterator = str[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(`------------------`);

// Emplementation Example
var someString = new String('khaled');

someString[Symbol.iterator] = function (value) {
    const _value = value;
    return { // this is the iterator object
        _index: -1,
        next() {
            if(this._index === _value.length - 1) return { value: undefined, done: true };
            this._index++;
            return { value: _value[this._index], done: false };
        },
    };
};

let iterator2 = someString[Symbol.iterator](someString);
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

