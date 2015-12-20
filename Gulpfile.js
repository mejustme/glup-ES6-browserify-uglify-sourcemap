//引入插件
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify');

//js任务
gulp.task('js', function() {
  return gulp.src('js/**/*.js', {})
             .pipe(browserify())
             .pipe(uglify())
             .pipe(gulp.dest('build/js'))
});

//定义watch任务
gulp.task('watch', function() {
   gulp.watch('js/**/*.js',['js']);
});

//gulp默认任务
gulp.task('default', ['watch']);
