const {src, dest} = require('gulp');

//opdracht 1 image

const image = function (imageFiles) {
    return function () {
        return src(imageFiles)
            .pipe(dest('dist/img'));
    }
};

exports.image = image;
