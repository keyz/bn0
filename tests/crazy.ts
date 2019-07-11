import fs from 'fs';
const path = require('path');

function* walkSync(dirPath: string): IterableIterator<string> {
  const fileList = fs.readdirSync(dirPath)

  for (const file of fileList) {
    const pathToFile = path.join(dirPath, file)
    const isDirectory = fs.statSync(pathToFile).isDirectory()
    if (isDirectory) {
      yield* walkSync(pathToFile)
    } else {
      yield pathToFile
    }
  }
}

let count = 0;

console.log('Will print 3 file paths.')
for (const filePath of walkSync(__dirname)) {
  count++;
  console.log(filePath);
  if (count === 3) {
    break;
  }
}
