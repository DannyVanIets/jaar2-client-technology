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

/**
* Een constructor function is ook toegestaan.
**/
class Meme {
    constructor(memeList) {
        if (memeList === undefined)
        {
            console.log("Je moet een memeList meegeven!");
        } else {
            this.memeList = memeList;
            this.cursor = 0;
        }
    }

    getNextMeme(){
        if(this.cursor >= this.memeList.count - 1){
            this.cursor = 0;
            return this.memeList[this.cursor].value;
        } else {
            this.cursor++;
            return this.memeList[this.cursor - 1].value;
        }
    }

    searchMeme(search){
        return this.memeList.includes(search);
    }
}
