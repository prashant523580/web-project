var gulp = require('gulp');
var gulpSAss = require('gulp-sass');
var GulpUglify = require('gulp-uglify');

gulp.task('sass', function() {
    gulp.src('src/scss/style.scss')
        .pipe(gulpSAss())
        .pipe(gulp.dest('dist/css'));

    gulp.watch('src/scss/*.scss', gulp.series('sass'));

});

gulp.task('gulp-uglify', function() {
    gulp.src('src/js/*.js')
        .pipe(GulpUglify())
        .pipe(gulp.dest('dist/js'));
    gulp.watch('src/js/*.js', gulp.series('gulp-uglify'));
});



gulp.task('default', gulp.parallel('sass', 'gulp-uglify'));