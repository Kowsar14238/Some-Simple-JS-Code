//Get the average of multiple numbers
//Using reduce we can get the average value of a set of arrays.

const average = (...args) =>{
    return args.reduce((a, b) => a + b, 0) / args.length;
}

var result = average(0, 1, 2, -1, 9, 10)
console.log(result); //3.5