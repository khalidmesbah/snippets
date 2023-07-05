function isArray (arr){
  return toString.call(arr) === '[object Array]';
}


console.log(isArray([]));
console.log(isArray({}));
console.log(isArray(213));
console.log(isArray("fd)asf"));
console.log(isArray(false));
console.log(isArray(null));
console.log(isArray());

