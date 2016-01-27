var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    manifest = require('../assets/config/manifest.json'),
    build    = require('./config/').styles.build,
    errors  = require('./config/').errors,
    notify  = require('gulp-notify'),
    sass    = require('gulp-sass'),
    plumber = require('gulp-plumber');

gulp.task('styles', function () {
    return gulp.src(manifest.styles)
        .pipe(plumber(errors.plumber_error))
        .pipe(sass.sync({ outputStyle: 'expanded' }))
        .on('error', errors.bail_error)
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Explorer >= 8'],
            cascade: false
        }))
        .pipe(gulp.dest(build));
});
