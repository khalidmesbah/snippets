/* STRINGS
- types
    - string primitive => string object
    - string object => string object
- properties
    - length
- methods
    - replace & replaceAll
        - pure function
        - can have a searchString or a regexp as a first arg
        - can have a replacerString or a replacerFunction as a second arg
*/
/* Notes
- empty strings are everywhere 
- str.indexOf() => will search for the string undefined
- toString()===valueOf()
*/
let str = `khaled`;

/* locale compare */
// console.log(`a`.localeCompare(`b`));
// console.log(`b`.localeCompare(`a`));
// console.log(`a`.localeCompare(`a`));
// console.log(`<-===================->`);

/* padStart , padEnd */
// console.log(str.padEnd(20));
// console.log(str.padStart(10, `*`));
// console.log(str.padEnd(10, `*`));
// console.log(str.padStart(10, `lod`));
// console.log(str.padEnd(10, `sf`));
// console.log(`<-===================->`);

/* indexOf/lastIndexOf */
// console.log(str.indexOf("", 332));
// console.log(str.indexOf("", -332));
// console.log(`code undefined code love`.indexOf());
// console.log(`code undefined code undefined love`.lastIndexOf());
// console.log(`<-===================->`);

/* slice, substring, substr */
/* 
- slice
    - params = start,end
    - negative indexes are valid
    - will not swap if start is bigger than the end
- substring
    - params = start,end
    - negative indexes are not valid and are zeroes
    - will swap if the start is bigger than the end
- substr
    - params = start,length
*/
console.log(str.slice());
console.log(str.substring());
console.log(str.substr(2, 5));
