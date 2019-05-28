const gulp = require('gulp')
const watch = require('gulp-watch')
const shell = require('gulp-shell')

const filePath = [
  './miniprogram/*.ts',
  './miniprogram/**/*.ts',
  './miniprogram/**/**/*.ts'
]

filePath.forEach((path, index) => {
  gulp.task(`watch`, (event) => {
    return watch(path).pipe(shell(['yarn compile']))
  })
})