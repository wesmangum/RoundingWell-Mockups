var gulp    = require('gulp'),
    notify  = require('gulp-notify'),
    plumber = require('gulp-plumber');

module.exports = {
    errors: {
        bail_error : function (err){
            this.emit('end');
            return false;
        },
        plumber_error : {
            errorHandler: notify.onError("Error: <%= error.message %>")
        }
    },
    scripts:{
        build: 'assets/js/_build/',
        // watch: watches the manifest.json scripts
    },
    styles:{
        build: 'assets/css/',
        watch: 'assets/sass/**/*.scss'
    }
};

