//Get a random integer between two integers

const random = (min, max) =>{
    Math.floor(Math.random() * (max - min + 1) + min);
}

var result = random(1, 100)
console.log(result); //27

var result = random(1, 100)
console.log(result); //84

var result = random(1, 100)
console.log(result); //55
