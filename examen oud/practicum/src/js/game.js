var score = 0;

function onImageClick(){
    score++;
    document.getElementById("score").innerHTML = score;
}

const Mario = (function ($) {

})(jQuery);

var SPA = (function() {

    let configMap = {

    };

    const init = function(){
        Game.init();
    };

    return {
        init: init
    };
})();

var Game = (function() {

    let configMap = {
        url: "../../dist/memes/meme-list.json"
    };

    const get = function(url){
        return $.get(url)
            .then(r => {
                return r
            })
            .catch(e => {
                console.log(e.message);
            });
    };

    const init = function(){
        const memes = new Meme(get(this.url));
    };

    return {
        init: init
    };
})();
