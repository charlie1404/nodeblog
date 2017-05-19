var gulp   = require('gulp');
var sass   = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var merge = require('merge-stream');

gulp.task('default', function () {
    console.log('gulp running');
});

gulp.task('hello', function () {
    console.log('Hello Zell');
});

gulp.task('sass', function () {
    return gulp.src('assets/scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('assets/css/'));
});

gulp.task('user_ref', ['sass'] ,function(){
    var main = gulp.src('assets/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('public'));
    var temp = gulp.src('assets/templates/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('public/templates'));
    return merge(main, temp);
});

gulp.task('watch', function () {
    //gulp.watch('assets/scss/**/*.scss', ['sass']);
});