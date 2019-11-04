var config  = require('../config')
var sftp = require('gulp-sftp');
var gulp    = require('gulp')
var changed = require('gulp-changed')
var open    = require('open')
var os      = require('os')
var package = require('../../package.json')
var path    = require('path')


var deployTask = function() {
   return gulp.src( path.join(config.root.dest, '/**/*'))
    .pipe(changed(config.root.deploy))
    .pipe(gulp.dest(config.root.deploy))
    .pipe(sftp(config.sftp));
}

gulp.task('deploy', ['production'], deployTask)
module.exports = deployTask
