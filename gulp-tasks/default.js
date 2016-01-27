var gulp = require('gulp');

gulp.task('build', ['scripts', 'styles']);

gulp.task('default', ['watch', 'build']);
