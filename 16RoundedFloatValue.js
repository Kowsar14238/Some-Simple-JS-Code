//Specified digits rounded

const round = (n, d) =>{
    Number(Math.round(n + "e" + d) + "e-" + d);
}

var result = round(3.1415926, 3)
console.log(result); //3.142

var result = round(3.1415926, 1)
console.log(result); //3.1
