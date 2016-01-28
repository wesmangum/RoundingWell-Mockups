var gulp   = require('gulp'),
    manifest = require('../assets/config/manifest.json'),
    config = require('./config/'),
    livereload = require('gulp-livereload');

gulp.task('watch', ['scripts', 'styles'], function() {
	// listents for any changes
	livereload.listen();

    // Watches sass for changes
    gulp.watch(config.styles.watch, ['styles:lint', 'styles']);

    // Watches JS files for changes
    gulp.watch(manifest.vendor.scripts, ['scripts:concat:vendor']);
    gulp.watch(manifest.scripts, ['scripts:lint', 'scripts:concat:core']);
});
