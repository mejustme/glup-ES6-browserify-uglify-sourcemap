//引入插件
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babel = require('gulp-babel');
//js任务
gulp.task('js', function() {

  return gulp.src('js/index.js', {})
             /* .pipe(babel({
                  presets: ['es2015'] // 当没有browserify打包可以直接用这个gulp-bable，否则必须用babelify,bableify是适配过的babel
              }))*/
             .pipe(browserify({
                transform: ['babelify'],  //集成在browserify里面要写ttransform:['babelify'] , grunt-browserify loose :all 不支持，
                                          // babelify6.0开始内部不包含插件要自己下载预配置依赖 如:es2015
                presets: ["es2015"], //或者配置文件.babelrc
                debug: true
             }))
             .pipe(sourcemaps.init({loadMaps: true}))
             .pipe(uglify())
             .pipe(sourcemaps.write('./map'))
             .pipe(gulp.dest('build/js'))
});

//定义watch任务
gulp.task('watch', function() {
   gulp.watch('js/**/*.js',['js']);
});

//gulp默认任务
gulp.task('default', ['watch']);
