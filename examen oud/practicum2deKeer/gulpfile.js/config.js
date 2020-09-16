module.exports = {
    files: {
        js: [
            'vendor/**/*.js',
            'src/js/**/*.js'

        ],
        jsOrder: [
            'src/js/game.js',
            'src/js/**/*.js',
            'vendor/**/*.js'

        ],
        css: [
            'src/**/*.css',
            'vendor/**/*.css'

        ],
        html: [
            './src/index.html'

        ],
        image: [
            './src/img/**/*.*'

        ],
        json: [
            './vendor//**/*.json'
        ]
    }
};
