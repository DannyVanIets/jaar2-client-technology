const {src, dest} = require('gulp');

//opdracht 1

const fn = function (htmlFiles) {
    return function () {
        return src(htmlFiles)
            .pipe(dest('dist'));
    }
};

exports.js = fn;
