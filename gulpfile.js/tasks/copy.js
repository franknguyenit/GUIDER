var config  = require('../config')
var sftp = require('gulp-sftp');
var gulp    = require('gulp')
var changed = require('gulp-changed')
var open    = require('open')
var os      = require('os')
var package = require('../../package.json')
var path    = require('path')


var copyTask = function() {
   return gulp.src( [ 
       path.join(config.root.dest, '/**/*'), 
       '!' + path.join(config.root.dest, '/*.html')
       ]
     )
    .pipe(gulp.dest(config.root.theme))
}

gulp.task('copy', copyTask)
module.exports = copyTask