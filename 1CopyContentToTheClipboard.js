//Copy content to the clipboard
//Improve the user experience of the website, we often need to copy the content to the clipboard, so that users can paste it to the designated place.
const copyToClipboard = (content) =>{
    navigator.clipboard.writeText(content);
}

copyToClipboard("Hello my friend");

//Maybe HTML file required