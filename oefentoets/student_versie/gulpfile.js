const gulp = require('gulp');
const {src, dest} = require('gulp');
const {series, parallel} = require('gulp');
const clean_css = require('gulp-clean-css');
const auto_prefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

/**
 * Opdracht 1a tot en met 1d
 * @returns {*}
 */
const js = function () {
        var filesToMove = ["src/*.js", "vendor/*.js"];
        return src(filesToMove, { base: './' })
            .pipe(concat("app.js"))
            .pipe(dest("dist"))
};

const css = function () {
        var filesToMove = ["src/*.css", "vendor/*.css"];
        return src(filesToMove, { base: './' })
            .pipe(concat("style.css"))
            .pipe(dest("dist"))
};

const html = function () {
        return src("src/*.html")
            .pipe(dest('dist'));
};

exports.build = series(html, js, css);
