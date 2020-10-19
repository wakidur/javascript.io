const fs = require('fs');
// Blocking code execution
const inputText = fs.readFileSync('./input.txt', 'utf-8');

console.log(inputText);

// Write
const textOut = `This is what we know about the avocado: ${inputText}. \nCreated on ${Date.now()}`;
fs.writeFileSync('./outpur.txt', textOut);

console.log('File Written!');
