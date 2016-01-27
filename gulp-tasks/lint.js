var gulp    = require('gulp'),
    errors  = require('./config/').errors,
    manifest = require('../assets/config/manifest.json'),
    eslint  = require('gulp-eslint'),
    notify = require('gulp-notify'),
    sassLint = require('gulp-sass-lint'),
    plumber = require('gulp-plumber');


function lint(files) {
  return gulp.src(files)
    .pipe(plumber(errors.plumber_error))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function lintsass(files) {
  return gulp.src(files)
      .pipe(plumber(errors.plumber_error))
      .pipe(sassLint())
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError());
}

gulp.task('scripts:lint', function() {
    return lint(manifest.scripts);
});

gulp.task('styles:lint', function() {
    return lintsass(['./assets/sass/**/*.s+(a|c)ss', '!./assets/sass/_1_core/_reset.scss']);
});

gulp.task('lint', ['scripts:lint', 'styles:lint']);
