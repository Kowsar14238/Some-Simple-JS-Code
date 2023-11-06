//Deduplicate elements in an array
//Remove duplicate elements in an array.

const uniqueArray = (arr) =>{
    return [...new Set(arr)];
}

var result = uniqueArray([ 1, 1, 2, 2,3, 4, 5, -1, 0 ]);
console.log(result); //[1, 2, 3, 4, 5, -1, 0]