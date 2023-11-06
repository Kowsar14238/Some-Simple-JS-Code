//Check if an object is an empty object

const isEmpty = obj =>{
    return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
}

var result = isEmpty({})
console.log(result); //true

var result = isEmpty({ name: 'fatfish' })
console.log(result); //false
