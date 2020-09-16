const {src, dest} = require('gulp');

const json = function (filesJSON) {
    return function () {
        return src(filesJSON)
            .pipe(dest('./dist'));
    }
};

exports.json = json;
