const fs = require('fs');
const path = require('path');
const myPath = path.join(__dirname, 'text.txt');
const readFile = fs.createReadStream(myPath);

readFile.on('data', (text) => {
  console.log(`${text}`);
});
