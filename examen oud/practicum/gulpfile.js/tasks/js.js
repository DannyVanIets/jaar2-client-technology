const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const order = require('gulp-order');

const fn = function (filesJs, filesJsOrder) {
    return function () {
        return src(filesJs)
            .pipe(order(filesJsOrder, {base :"./"}))
            .pipe(concat("app.js"))
            .pipe(dest("dist"))
    }
};

exports.js = fn;
