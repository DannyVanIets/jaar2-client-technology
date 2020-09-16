const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const order = require('gulp-order');

const fn = function (jsfiles, jsorder) {
    return function () {
        return src(jsfiles)
            .pipe(order(jsorder))
            .pipe(concat('app.js'))
            .pipe(dest('./dist'));
    }
};

exports.js = fn;
