//Get the type of the variable

const typeOf = (obj) =>{
    Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

var result = typeOf(''); 
console.log(result);        // string
var result = typeOf(0);
console.log(result);        // number
var result = typeOf()
console.log(result);        // undefined
var result = typeOf(null)
console.log(result);        // null
var result = typeOf({})
console.log(result);        // object
var result = typeOf([])
console.log(result);        // array
var result = typeOf(0)
console.log(result);        // number
var result = typeOf(() => {})
console.log(result);        // function