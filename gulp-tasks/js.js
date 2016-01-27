var gulp    = require('gulp'),
    errors  = require('./config/').errors,
    build = require('./config/').scripts.build,
    manifest = require('../assets/config/manifest.json'),
    concat  = require('gulp-concat'),
    notify  = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber');

function concatMap(src, filename){
    return gulp.src(src)
        .pipe(plumber(errors.plumber_error))
        //.pipe(sourcemaps.init())
        .pipe(concat(filename))
        //.pipe(sourcemaps.write('./', {
        //    sourceMappingURLPrefix: '/assets/js/_build/'
        //}))
        .pipe(gulp.dest(build));
}

gulp.task('scripts:concat:core', function(){
    return concatMap(manifest.scripts, 'core.js');
});

gulp.task('scripts:concat:vendor', function(){
    return concatMap(manifest.vendor.scripts, 'vendor.js');
});


gulp.task('scripts:concat', ['scripts:concat:vendor', 'scripts:concat:core']);

gulp.task('scripts', ['scripts:concat']);
