//Find the day of the year in which the date falls
//what day is it this year in given date

const dayInYear = (d) =>{
    return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}

var result = dayInYear(new Date('2023/06/23'));
console.log(result); //174