//Capitalize the first letter of the string

const capitalize = str =>{
    return str.charAt(0).toUpperCase() + str.slice(1);  
}

var result = capitalize("hello fatfish")
console.log(result);  //Hello fatfish
