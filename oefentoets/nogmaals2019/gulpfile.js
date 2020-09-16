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
    return src(['./src/**/*.js', './vendor/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(dest('dist'));
};

const css = function () {
    return src(['./src/**/*.css', './vendor/**/*.css'])
        .pipe(concat('style.css'))
        .pipe(dest('dist'));
};

const html = function () {
    return src('./src/**/*.html')
        .pipe(dest('dist'));
};

exports.build = parallel(html, js, css);
