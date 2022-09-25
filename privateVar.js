function secretVariable() {
  var private = "super secret";
  return function(){
    return private;
  }
}
const getSecretVariable = secretVariable();

console.log(getSecretVariable());
