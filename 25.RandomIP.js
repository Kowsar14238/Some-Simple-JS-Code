//Random IP

const generateRandomIP = () =>{
    return Array.from({length: 4}, () => Math.floor(Math.random() * 256)).join('.');
}

var result = generateRandomIP(); 
console.log(result); //220.187.184.113

var result = generateRandomIP(); 
console.log(result); //254.24.179.151