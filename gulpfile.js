var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var react = require('gulp-react');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
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


// Build for production (Coming soon)

// Watch for changes
gulp.task('watch', function() {
  gulp.watch('/src/assets/css/**/*.less', ['less']);
  gulp.watch('/src/assets/scripts/**/*.jsx', ['scripts']);
});

gulp.task('default', ['less', 'scripts', 'webserver', 'watch']);
