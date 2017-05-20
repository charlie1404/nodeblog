var gulp     = require('gulp');
var sass     = require('gulp-sass');
var useref   = require('gulp-useref');
var uglify   = require('gulp-uglify');
var gulpIf   = require('gulp-if');
var clean    = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var ngHTML   = require('gulp-angular-htmlify');
var plumber  = require('gulp-plumber');
var srcMap   = require('gulp-sourcemaps');

gulp.task('default', function () {

});

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('src/css/'));
});

gulp.task('userref', function () {
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

gulp.task('fonts', function () {
    return gulp.src('src/fonts/**/*')
            .pipe(gulp.dest('dist/fonts'));
});

gulp.task('templates', function () {
    return gulp.src('src/templates/**/*')
            .pipe(gulp.dest('dist/templates'));
});