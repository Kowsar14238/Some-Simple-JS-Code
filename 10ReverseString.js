//Reverse a string

const reverseStr = str =>{
    return str.split('').reverse().join('')
};

var result = reverseStr('fatfish'); 
console.log(result); //hsiftaf