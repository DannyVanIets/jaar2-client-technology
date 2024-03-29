const config = require('./config');

const js = require('./tasks/js').js(config.localFilesJs, config.localFilesJsOrder, config.localServerProjectPath);
js.displayName = "js";

const hello = function (done) {
    console.log(`Groeten van ${config.voornaam}!`);
    done();
};

exports.default = hello;

exports.js = js;
