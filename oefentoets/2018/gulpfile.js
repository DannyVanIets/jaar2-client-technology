/**
 * OPDRACHT 1
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var through = require('through2');
var fs = require('fs');

// var json = JSON.parse(fs.readFileSync('./olympics.json'));
//
// gulp.task('json', function() {
//     var medailles = [];
//     json.forEach(function (s) {
//         if (s.country == 'Netherlands' && s.sport == 'Swimming') {
//             medailles.push(s);
//         }
//     });
//
//     var JSONstring = JSON.stringify(medailles);
//     var callback = function () {
//         console.log(arguments);
//     };
//     fs.writeFile('myjsonfile.json', JSONstring, 'utf8', callback);
// });

gulp.task('html', function () {
    gulp.src(['src/index.html'])
        .pipe(gulp.dest('dist/'))
        .pipe(livereload());
});

gulp.task('js', function () {
    gulp.src(['src/app.js'])
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

gulp.task('images', function () {
    gulp.src(['src/images/**/*.jpg'])
        .pipe(gulp.dest('dist/images'))
        .pipe(livereload());
});

gulp.task('sass', function () {
    return gulp.src('src/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('zwemmers', function () {
    return gulp.src('src/swimming.js')
        .pipe(gulp.dest('dist/js'))
});

gulp.task('default', function () {
    console.log('running default task')
});

gulp.task('build', ['html', 'sass', 'js', 'images'], function () {

});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/index.html', ['html']);
    gulp.watch('src/style.scss', ['sass']);
    gulp.watch('src/app.js', ['js']);
    gulp.watch(['src/images'], ['images']);
});
