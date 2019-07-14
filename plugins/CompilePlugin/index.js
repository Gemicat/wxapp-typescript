const path = require('path')
const {
  walk,
  readFile
} = require('./utils')

class CompilePlugin {
  constructor(options) {
    this.patterns = path.join(options.base, options.path)
  }
  apply(compiler) {
    const plugin = {
      name: 'CompilePlugin'
    }
    compiler.hooks.emit.tapAsync(plugin, (compilation, callback) => {
      const files = walk(this.patterns)
      Promise.all(files.map(file => readFile(compiler.inputFileSystem, file.path)
        .then(content => {
          const fp = file.path.replace(this.patterns, '')
          compilation.assets[fp] = {
            size() {
              return file.size;
            },
            source() {
              return content;
            }
          }
        }))).then(() => callback())
    })
  }
}

module.exports = CompilePlugin;