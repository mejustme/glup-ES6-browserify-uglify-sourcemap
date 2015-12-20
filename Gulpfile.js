//引入插件
var gulp = require('gulp'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    sourcemaps = require('gulp-sourcemaps');

//js任务
gulp.task('js', function() {

    return gulp.src(['js/**/*.js','!js/module/*.js'])
        .pipe(browserify({
            transform: ['babelify'],
            presets: ["es2015"],   //6.0.0+ babelify不再内含transform插件,需要额外install并指出
            debug: true
        }))
        .pipe(sourcemaps.init({loadMaps: true})) //加入browserify产生的sourceMap
        .pipe(uglify())
        .pipe(sourcemaps.write('./map'))
        .pipe(rename(function(path){
            if(path.extname !== '.map'){
                path.extname = ".min.js";
            }
        }))  
        .pipe(gulp.dest('build/js'))
});


//定义watch任务
gulp.task('watch', function() {
   gulp.watch(['js/**/*.js','!js/module/*.js'],['js']);
});

//gulp默认任务
gulp.task('default', ['js','watch']);
