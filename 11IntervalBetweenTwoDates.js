//Calculate the interval between two dates

const dayDiff = (d1, d2) =>{
    return Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000);
}

var result = dayDiff(new Date("2023-06-23"), new Date("1997-05-31"));
console.log(result); //9519
