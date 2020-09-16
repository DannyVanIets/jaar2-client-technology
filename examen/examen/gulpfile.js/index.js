const {series, parallel, src, dest} = require('gulp');
const concat = require('gulp-concat');

const files =
    [
        'src/**/*.js',
        'vendor/*.js'
    ];

const jsTask = function (jsfiles) {
    return function () {
        return src(jsfiles)
            .pipe(concat('app.js'))
            .pipe(dest('./dist'));
    }
};

const js = jsTask(files);
js.displayName = 'js';

exports.build = parallel(js);
