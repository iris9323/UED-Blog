let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    gutil = require("gulp-util"),
    babel = require("gulp-babel"),
    cleanCSS = require('gulp-clean-css'),
    imageMin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin')


gulp.task('minify-html', function () {
    let options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: false,
        minifyCSS: false
    }
    gulp.src('src/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'))
});


gulp.task('minify-js', function () {
    return gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .on("error", function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(gulp.dest('dist/js'))
})

gulp.task('minify-css', function () {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('minify-img', function () {
    return gulp.src('src/images/*.*')
        .pipe(imageMin({ progressive: true }))
        .pipe(gulp.dest('dist/images'))
})

gulp.task('watch', function () {
    gulp.watch('src/views/*.html', ['minify-html'])
    gulp.watch('src/js/*.js', ['minify-js'])
    gulp.watch('src/css/*.css', ['minify-css'])
})

gulp.task('default', ['minify-html', 'minify-js', 'minify-css', 'minify-img'])
