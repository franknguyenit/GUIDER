var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');

const config      = require('../config')
const path        = require('path')

const lintTask = function () {
    return gulp.src(path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}'))
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
}

gulp.task('lint', lintTask);

module.exports = lintTask;
