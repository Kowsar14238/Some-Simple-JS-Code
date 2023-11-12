//Generate a random string of specified length

const generateRandomString = length =>{
    return [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
}

var result = generateRandomString(12)
console.log(result); //cysw0gfljoyx

var result = generateRandomString(12)
console.log(result); //uoqaugnm8r4s

