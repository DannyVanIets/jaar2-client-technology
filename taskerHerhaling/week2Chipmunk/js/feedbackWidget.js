$(function() {
    console.log( "ready!" );

    $("#okButton").on("click", function() {
        alert("The button was clicked.");
    });

    let fw = new FeedbackWidget("feedback-success");
    fw.show("Veel success ermee!", "success");

    let logShow = {
        message: "Bijna klaar, tijd voor koffie",
        type: "success"
    };

    fw.show(logShow.message, logShow.type);
    fw.show("Niet in slaap vallen!", "danger");
    fw.show("test!", "danger");
    fw.history();
});

class FeedbackWidget {
    constructor(elementId) {
        this._elementId = elementId;
    }

    get elementId() { //getter, set keyword voor setter methode
        return this._elementId;
    }

    show(message, type) {
        var x = document.getElementById("feedback-success");

        x.style.display = "block";
        $(x).text(message);

        let logObject = {
            message: message,
            type: type
        };

        this.log(logObject);

        if(type === "success")
        {
            $(x).removeClass("alert-danger");
            $(x).addClass("alert-success");
        }
        else
        {
            $(x).removeClass("alert-success");
            $(x).addClass("alert-danger");
        }
    }

    hide() {
        var x = document.getElementById(this._elementId);
        x.style.display = "none";
    }

    log(message){
        let logMessages = [];

        if(localStorage.length !== 0){
            logMessages = JSON.parse(localStorage.getItem("feedback_widget"));
        }

        if(logMessages.length >= 10){
            logMessages.pop();
        }

        logMessages.unshift(message);
        localStorage.setItem("feedback_widget", JSON.stringify(logMessages));
    }

    removeLog(key){
        localStorage.removeItem(key);
    }

    removeAllLogs(){
        localStorage.clear();
    }

    history(){
        let arrayLogs = [];
        let logString = "";

        arrayLogs = JSON.parse(localStorage.getItem("feedback_widget"));

        arrayLogs.forEach(x => logString += `type: ${x.type}    -   ${x.message} \n`);

        console.log(logString);
    }
}

const apiUrl = 'url/super/duper/game';

const Game = (function(url){

    //Configuratie en state waarden
    let configMap = {
        apiUrl: url, // parameter url wordt bewaard in een object
    };

    const publicMethod = function () {
        console.log('hallo, de url is ' + apiUrl);
    };

    // Waarde/object geretourneerd aan de outer scope
    return{
        publicMethod : publicMethod
    }
})(apiUrl);

Game.Reversi = (function(){

    const privateMethod = function () {
        console.log('hallo');
    };

    const init = function () {
        privateMethod()
    };

    // Waarde/object geretourneerd aan de outer scope
    return{
        init : init
    }
})();
