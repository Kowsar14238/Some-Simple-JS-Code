//Detect if it is dark mode

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log(isDarkMode);

//Maybe HTML file required