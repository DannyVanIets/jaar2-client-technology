const {series, parallel, src, dest} = require('gulp');
const concat = require('gulp-concat');

const files =
    [
           //opdracht voor student
    ];

const jsTask = function (jsfiles) {
        //opdracht voor student
};

const js = jsTask(files);
js.displayName = 'js';

exports.build = parallel(js);
