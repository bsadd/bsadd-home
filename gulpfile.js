var gulp = require('gulp'),
    replace = require('gulp-replace'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint'),
    nunjucksRender = require('gulp-nunjucks-render'),
    prettify = require('gulp-jsbeautifier'),
    watch = require('gulp-watch'),
    injectHtml = require('gulp-inject-stringified-html'),
    del = require('del');


gulp.task('clean', function clean() {
    return del(['build']);
});

// builds all versions but does not pushes them to web plugin dir
gulp.task('build', ['clean'], function build() {
    gulp.start(['build-html', 'static']); 
});

// copies static files to dist folder
gulp.task('static', function Static() {
    gulp.src(['src/static/**'], { base: 'src' })
        .pipe(gulp.dest('build'));

    gulp.src(['src/error/**'], { base: 'src' })
        .pipe(gulp.dest('build'));

});


gulp.task('build-html', () => {
    // eslint-disable-next-line
    console.log('Building htmls.');

    return gulp.src('src/pages/*.html')
        .pipe(nunjucksRender({
            path: ['src/templates'],
        }))
        .pipe(prettify({
            indent_char: ' ',
            indent_size: 4,
        }))
        .pipe(gulp.dest('build'));
});


gulp.task('watch', ['build-html'], () => {
    watch(['src/app/**', 'src/pages/**', 'src/templates/**'], function watcherCallback() {
        gulp.start(['build']);
    });
});

gulp.task('default', ['watch']);
