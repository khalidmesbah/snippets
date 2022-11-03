String.prototype.startsWith = function (str, indx = 0) {
  let thisStr = this.valueOf();
  thisStr = thisStr.slice(indx, str.length + indx);
  return thisStr === str;
};
const str = "khalid";
console.log(str.startsWith("alid", 0));
