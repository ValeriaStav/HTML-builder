const fs = require('fs');
const path = require('path');
const myPath = path.join(__dirname, 'secret-folder');

fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err);
  }
  files.forEach((file) => {
    if (file.isFile()) {
      const fullPath = path.join(myPath, file.name);
      const fileParse = path.parse(fullPath);
      const fileName = fileParse.name;
      const fileExtension = fileParse.ext.slice(1);
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(err);
        }
        const fileSize = (stats.size / 1024).toFixed(3);
        console.log(`${fileName} - ${fileExtension} - ${fileSize} kb`);
      });
    }
  });
});
