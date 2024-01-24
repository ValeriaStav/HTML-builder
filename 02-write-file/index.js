const fs = require('fs');
const path = require('path');
const { stdin, stdout } = require('process');

const myPath = path.join(__dirname, 'text.txt');
const writeFile = fs.createWriteStream(myPath);

stdout.write('Hello, please enter some text:\n');

stdin.on('data', (text) => {
  if (text.toString().trim() === 'exit') {
    stdout.write('See you!');
    process.exit();
  }
  writeFile.write(`${text}\n`);
});

process.on('SIGINT', () => {
  stdout.write('See you!');
  process.exit();
});
