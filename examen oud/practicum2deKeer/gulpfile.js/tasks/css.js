const {src, dest} = require('gulp');
const concat = require('gulp-concat');

const css = function (filesCSS) {
    return function() {
        return src(filesCSS)
            .pipe(concat("css.css"))
            .pipe(dest("./dist/css"));
    }
};

exports.css = css;
