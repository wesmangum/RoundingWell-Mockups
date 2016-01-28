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
        build: 'public/assets/js/',
        // watch: watches the manifest.json scripts
    },
    styles:{
        build: 'public/assets/css/',
        watch: 'assets/sass/**/*.scss'
    }
};

