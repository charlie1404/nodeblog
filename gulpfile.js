var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var clean = require('gulp-clean');

gulp.task('default', function () {

});

gulp.task('hello', function () {
    console.log('Hello Zell');
});

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('src/css/'));
});

gulp.task('user_ref', function () {
    return gulp.src('src/index.html')
            .pipe(useref())
            .pipe(gulpIf('*.js', uglify()))
            .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    //gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('clean', function () {
    return gulp.src(['dist/css/*.css','dist/js/*.js','dist/fonts/*','dist/templates/*.html','dist/images/*', 'dist/*.html'], {read: false})
            .pipe(clean({force: true}));
});
