var gulp    = require('gulp'),
    manifest = require('../assets/config/manifest.json'),
    livereload = require('gulp-livereload');


gulp.task('templates', function() {
    gulp.src(manifest.templates).pipe(livereload());
});
