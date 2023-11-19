//Random Boolean values

const randomBoolean = () =>{
    var randomBoolean = Math.random();
    console.log(randomBoolean);
    return randomBoolean >= 0.5;
}

console.log(randomBoolean());