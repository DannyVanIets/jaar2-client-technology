"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

$(function () {
  console.log("ready!");
  $("#okButton").on("click", function () {
    alert("The button was clicked.");
  });
  var fw = new FeedbackWidget("feedback-success");
  fw.show("Veel success ermee!", "success");
  var logShow = {
    message: "Bijna klaar, tijd voor koffie",
    type: "success"
  };
  fw.show(logShow.message, logShow.type);
  fw.show("Niet in slaap vallen!", "danger"); //fw.history();
});

var FeedbackWidget = /*#__PURE__*/function () {
  function FeedbackWidget(elementId) {
    _classCallCheck(this, FeedbackWidget);

    this._elementId = elementId;
  }

  _createClass(FeedbackWidget, [{
    key: "show",
    value: function show(message, type) {
      var x = document.getElementById("feedback-success");
      x.style.display = "block";
      $(x).text(message);
      var logObject = {
        message: message,
        type: type
      };
      this.log(logObject);

      if (type === "success") {
        $(x).removeClass("alert-danger");
        $(x).addClass("alert-success");
      } else {
        $(x).removeClass("alert-success");
        $(x).addClass("alert-danger");
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var x = document.getElementById(this._elementId);
      x.style.display = "none";
    }
  }, {
    key: "log",
    value: function log(message) {
      var logMessages = [];

      if (localStorage.length !== 0) {
        logMessages = JSON.parse(localStorage.getItem("feedback_widget"));
      }

      if (logMessages.length >= 10) {
        logMessages.pop();
      }

      logMessages.unshift(message);
      localStorage.setItem("feedback_widget", JSON.stringify(logMessages));
    }
  }, {
    key: "removeLog",
    value: function removeLog(key) {
      localStorage.removeItem(key);
    }
  }, {
    key: "removeAllLogs",
    value: function removeAllLogs() {
      localStorage.clear();
    }
  }, {
    key: "history",
    value: function history() {
      var arrayLogs = [];
      var logString = "";
      arrayLogs = JSON.parse(localStorage.getItem("feedback_widget"));
      arrayLogs.forEach(function (x) {
        return logString += "type: ".concat(x.type, "    -   ").concat(x.message, " \n");
      });
      console.log(logString);
    }
  }, {
    key: "elementId",
    get: function get() {
      //getter, set keyword voor setter methode
      return this._elementId;
    }
  }]);

  return FeedbackWidget;
}();

var urlForApi = "/api/url";
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=zwolle&apikey=399c599ecf66641be477a03109aef585";

var Game = function (urlForApi) {
  var configMap = {
    apiUrl: urlForApi
  };
  var stateMap = {
    gameState: "Onbekend"
  };

  var _getCurrentGameState = function _getCurrentGameState() {
    var tekst = stateMap.gameState;
    stateMap.gameState = Game.Model._getGameState();

    if (stateMap.gameState === 1) {
      tekst = "Wit aan zet";
    } else if (stateMap.gameState === 2) {
      tekst = "Zwart aan zet";
    }

    console.log("De huidige game staat is: " + tekst);
  }; //Private function init


  var privateInit = function privateInit() {
    console.log(configMap.apiUrl);
  }; //Waarde/object geretourneerd aan de outer scope


  return {
    init: function init() {
      privateInit();
      afterInit();
      window.setInterval(_getCurrentGameState, 2000);
    }
  };
}(urlForApi);

Game.Data = function () {
  var configMap = {
    apiKey: "399c599ecf66641be477a03109aef585",
    mock: [{
      url: "api/Spel/Beurt",
      data: 0
    }]
  };
  var stateMap = {
    enviroment: "productie"
  };

  var getMockData = function getMockData(url) {
    //filter mock data, configMap.mock ... oei oei, moeilijk moeilijk :-)
    var mockData = configMap.mock;
    return new Promise(function (resolve, reject) {
      resolve(mockData);
    });
  };

  var get = function get(url) {
    //Als enviroment productie is, request aan de productie omgeven doen.
    //Als het development is, dan getMockData gebruiken om een resultaat te retourneren
    if (stateMap.enviroment !== "productie") {
      return $.get(url).then(function (r) {
        return r;
      })["catch"](function (e) {
        console.log(e.message);
      });
    } else if (stateMap.enviroment !== "development") {
      return getMockData(url);
    }
  }; //Private method


  var privateInit = function privateInit() {
    console.log("Doing private stuff");
  }; //Public method thanks to the return.


  var init = function init(environment) {
    if (environment !== "production") {
      //Request aan de server doen. Nog niet een goed idee wat ze hier mee bedoelen.
      stateMap.enviroment = environment;
    } else if (environment !== "development") {
      //Gegevens teruggeven uit de configmap op basis van de urlgegevens
      console.log(configMap.mock.indexOf(url));
    } else {
      throw new Error("Enviroment is niet correct meegegeven!");
    }

    privateInit();
  };

  return {
    init: init,
    get: get
  };
}();

Game.Model = function () {
  var configMap = {};

  var getWeather = function getWeather() {
    //Check if the temperatuur wordt meegegeven, zo niet, throw  dan een error NOG NIET GEDAAN!
    Game.Data.get(weatherUrl).then(function (data) {
      return console.log(data);
    });
  };

  var _getGameState = function _getGameState() {
    //Aanvragen via Game.Data met een token. Wat die token precies is, is nog onduidelijk
    var urlNaarToken = "api/Spel/Beurt/token.txt"; //let currentGameState = Game.Data.get(urlNaarToken);

    var currentGameState = 1; //controle of ontvangen data valide is

    if (currentGameState !== 0 && currentGameState !== 1 && currentGameState !== 2) {
      throw new Error("Dit is niet een juiste beurt!");
    } else {
      return currentGameState;
    }
  }; //Private method


  var privateInit = function privateInit() {
    console.log("Doing private stuff");
  }; //Public method thanks to the return.


  var init = function init() {
    privateInit();
  };

  return {
    init: init,
    getWeather: getWeather,
    _getGameState: _getGameState
  };
}();

Game.Reversi = function () {
  console.log("Hallo vanuit module Reversi");
  var configMap = {}; //Private method

  var privateInit = function privateInit() {
    console.log("Doing private stuff");
  }; //You can also declare a public method directly into the return. Is also allowed!


  return {
    init: function init() {
      privateInit();
    }
  };
}();