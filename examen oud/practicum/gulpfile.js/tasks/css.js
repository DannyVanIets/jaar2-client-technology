const {src, dest} = require('gulp');
const concat = require('gulp-concat');

const css = function (filesCSS) {
    return function () {
        return src(filesCSS, {base: './'})
            .pipe(concat("style.css"))
            .pipe(dest("dist"))
    }
};

exports.css = css;
