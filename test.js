var hero ={
    _name : "khaled",
    getSecretIndentitiy:function(){
        return this._name;
    }
}

var s = hero.getSecretIndentitiy;

console.log(s())
console.log(hero.getSecretIndentitiy())