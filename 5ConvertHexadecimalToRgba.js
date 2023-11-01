// Convert hexadecimal to rgba
//We can convert the hexadecimal to rgba color value.

const hexToRgba = hex =>{
    const [r, g, b] = hex.match(/\w\w/g).map(val => parseInt(val, 16))
    return `rgba(${r}, ${g}, ${b}, 1)`;
}

var result = hexToRgba('#000000')
console.log(result); //rgba(0, 0, 0, 1)

var result = hexToRgba('#ff007f')
console.log(result); //rgba(255, 0, 127, 1)
