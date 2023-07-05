function deepFreeze(object) {
    const propNames = Object.getOwnPropertyNames(object);
    for (const name of propNames) {
        const value = object[name];
        if (value && typeof value === 'object') deepFreeze(value);
    }

    return Object.freeze(object)
}
const object = {
    name: `khaled`,
    age: [1, 2, 3, 4]
};

deepFreeze(object);

object.age[1] = 2335
    
console.log(object)