var config       = require('../config')
if(!config.tasks.html) return

var browserSync  = require('browser-sync')
var data         = require('gulp-data')
var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var handleErrors = require('../lib/handleErrors')
var htmlmin      = require('gulp-htmlmin')
var path         = require('path')
var render       = require('gulp-nunjucks-render')
var fs           = require('fs')

var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

var paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/**/*.{' + config.tasks.html.extensions + '}'), exclude],
  dest: path.join(config.root.dest, config.tasks.html.dest),
}

var getData = function(file) {
  
  // get global data
  var dataPath = path.resolve(config.root.src, config.tasks.html.src, config.tasks.html.dataFile)
  var globalData =  JSON.parse(fs.readFileSync(dataPath, 'utf8'));


  // get data for specified page
  var processingFile = path.basename(file.path, '.html');
  var dataProcessPath = path.resolve(config.root.src, config.tasks.html.src, 'data', processingFile.concat('.json') );
  var data = {};
  var processingFileData = {};
  if(fs.existsSync( dataProcessPath)){
      processingFileData = JSON.parse(fs.readFileSync(dataProcessPath, 'utf8'));
  }
  if(processingFileData){
      globalData[processingFile] = processingFileData;
  }
  return globalData;

}

var htmlTask = function() {

  return gulp.src(paths.src)
    .pipe(data(getData))
    .on('error', handleErrors)
    .pipe(render({
      path: [path.join(config.root.src, config.tasks.html.src)],
      envOptions: {
        watch: false
      }
    }))
    .on('error', handleErrors)
    .pipe(gulpif(global.production && config.tasks.html.min, htmlmin(config.tasks.html.htmlmin)))
    .pipe(gulp.dest(paths.dest))
    .on('end', browserSync.reload)

}

gulp.task('html', htmlTask)
module.exports = htmlTask
