//Shuffle an array
//This is very common in lottery programs, but it’s not truly random.
const shuffleArray = array => {
    return array.sort(() => Math.random() - 0.5);
};

var result = shuffleArray([ 1, 2,3,4, -1, 0 ]);
console.log(result); //[3, 1, 0, 2, 4, -1]
