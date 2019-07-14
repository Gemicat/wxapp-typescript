const path = require('path')
const preProcessPattern = require('./preProcessPattern')
const processPattern = require('./processPattern')

class CompilePlugin {
  constructor(patterns = []) {
    this.patterns = patterns
  }
  apply(compiler) {
    const plugin = {
      name: 'CompilePlugin'
    }
    const {
      patterns
    } = this
    compiler.hooks.emit.tapAsync(plugin, (compilation, callback) => {
      const globalRef = {
        inputFileSystem: compiler.inputFileSystem,
        context: compiler.options.context,
        base: path.join(__dirname, '../../')
      }
      Promise.all(
        patterns.map(pattern => {
          Promise.resolve()
            .then(() => preProcessPattern(globalRef, pattern))
            .then((pattern) => {
              processPattern(globalRef, pattern)
            })
        })
      )
    })
  }
}

module.exports = CompilePlugin;