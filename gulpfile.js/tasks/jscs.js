const gulp = require('gulp');
const jscs = require('gulp-jscs');
const plumber = require('gulp-plumber');
const config      = require('../config')
const path        = require('path')

const jscsTask = function () {
    return gulp.src(path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}'))
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'));
}

gulp.task('jscs', jscsTask);
module.exports = jscsTask;


