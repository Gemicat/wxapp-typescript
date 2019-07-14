const path = require('path')
const fs = require('fs')

const walk = (dir) => {
  let files = []
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    stat && stat.isDirectory() ? (files = files.concat(walk(filePath))) : files.push({
      path: filePath,
      size: stat.size
    })
  })
  return files
}

const readFile = (inputFileSystem, path) =>
  new Promise((resolve, reject) => {
    inputFileSystem.readFile(path, (err, stats) => {
      if (err) {
        reject(err);
      }
      resolve(stats);
    });
  });

module.exports = {
  readFile,
  walk
}