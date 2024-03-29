Game.Data = (function () {

    let configMap = {
        apiKey: "399c599ecf66641be477a03109aef585",
        mock: [
            {
                url: "api/Spel/Beurt",
                data: 0
            }
        ]
    };

    let stateMap = {
        enviroment : "productie"
    };

    const getMockData = function(url){

        //filter mock data, configMap.mock ... oei oei, moeilijk moeilijk :-)
        const mockData = configMap.mock;

        return new Promise((resolve, reject) => {
            resolve(mockData);
        });

    };

    const get = function(url){
        //Als enviroment productie is, request aan de productie omgeven doen.
        //Als het development is, dan getMockData gebruiken om een resultaat te retourneren
        if(stateMap.enviroment !== "productie")
        {
            return $.get(url)
                .then(r => {
                    return r
                })
                .catch(e => {
                    console.log(e.message);
                });
        }
        else if (stateMap.enviroment !== "development")
        {
            return getMockData(url);
        }
    };

    //Private method
    const privateInit = function(){
        console.log("Doing private stuff");
    };

    //Public method thanks to the return.
    const init = function(environment){

        if(environment !== "production")
        {
            //Request aan de server doen. Nog niet een goed idee wat ze hier mee bedoelen.
            stateMap.enviroment = environment;

        }
        else if (environment !== "development")
        {
            //Gegevens teruggeven uit de configmap op basis van de urlgegevens
            console.log(configMap.mock.indexOf(url));

        }
        else
        {
            throw new Error("Enviroment is niet correct meegegeven!");
        }
        privateInit();
    };

    return {
        init: init,
        get: get
    };
})();
