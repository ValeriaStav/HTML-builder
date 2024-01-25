const fs = require('fs');
const path = require('path');

const myPath = path.join(__dirname, 'files');
const newPath = path.join(__dirname, 'files-copy');

async function copyDir() {
  await fs.promises.rm(newPath, { recursive: true, force: true });
  await fs.promises.mkdir(newPath, { recursive: true });
  (await fs.promises.readdir(myPath, { withFileTypes: true })).forEach(
    (file) => {
      fs.copyFile(
        path.join(myPath, file.name),
        path.join(newPath, file.name),
        (err) => {
          if (err) throw err;
        },
      );
    },
  );
}

copyDir();
