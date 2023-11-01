//Convert rgba to hexadecimal
//We can convert the rgba to hexadecimal color value.

const rgbaToHex = (r, g, b) => {
    return "#" + [r, g, b].map(num => parseInt(num).toString(16).padStart(2, '0')).join('');
}

var result = rgbaToHex(0, 0 ,0);
console.log(result); //#000000

var result = rgbaToHex(255, 0, 127);
console.log(result); //#ff007f
