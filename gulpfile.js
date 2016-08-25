var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var react = require('gulp-react');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var browserify = require('browserify');
var webserver = require('gulp-webserver');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream');


// less to CSS
gulp.task('less', function () {
  return gulp.src('./src/assets/css/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src/assets/bundles'));
});


// jsx to js
gulp.task('scripts', function () {
  return browserify('./src/assets/scripts/credits.jsx')
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./src/assets/bundles'));
});


// dev webserver
gulp.task('webserver', function() {
  return gulp.src('./src')
    .pipe(webserver({
      host: 'localhost',
      port: 8000,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});


// Build js for dist
gulp.task('buildScripts', function() {
  return gulp.src([
    '!./src/assets/bundles/main.css',
    './src/assets/bundles/app.js'
  ])
  .pipe(rename('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});


// Build css into dist
gulp.task('buildStyles', function () {
  return gulp.src([
    '!./src/assets/bundles/app.css',
    './src/assets/bundles/main.css'
  ])
  .pipe(cssmin())
  .pipe(rename('app.min.css'))
  .pipe(gulp.dest('dist'));
});


// Switch dist files for production
gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});


// Watch for changes
gulp.task('watch', function() {
  gulp.watch('/src/assets/css/**/*.less', ['less']);
  gulp.watch('/src/assets/scripts/**/*.jsx', ['scripts']);
});

gulp.task('default', ['less', 'scripts', 'webserver', 'watch']);
gulp.task('build', ['buildScripts', 'buildStyles', 'html']);
