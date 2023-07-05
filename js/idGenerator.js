function* generateNewId(){
    let id = 1;
    while(true) yield id++;
}
const idGenerator = generateNewId();
const arr = [];
for(let i=0;i<10;i++){
    arr[i] = idGenerator.next().value;
}
console.log(arr)
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
