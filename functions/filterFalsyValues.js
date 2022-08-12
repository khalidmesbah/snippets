const values = [1,0,null,undefined,"",false,[],{},2,3,5]
console.log(values.filter(Boolean))
/* ===
console.log(values.filter(e=>Boolean(e)))
*/