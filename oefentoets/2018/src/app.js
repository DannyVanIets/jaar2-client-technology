var zwemModule = (function ($) {

    var zoek, filterZwemmers, updateZwemmersTabel, initModule;

    zoek = function (medaille) {
        filterZwemmers(medaille)
            .then(function (gefilterdeZwemmers) {
                updateZwemmersTabel(gefilterdeZwemmers);
            });
    };

    filterZwemmers = function (medaille) {
        return new Promise(function (resolve, reject) {
            var gefilterdeZwemmers = zwemmers.filter(function (zwemmer) {
                if (medaille == 'goud') {
                    return zwemmer.gold > 0;
                } else if (medaille == 'silver') {
                    return zwemmer.silver > 0;
                } else if (medaille == 'bronze') {
                    return zwemmer.bronze > 0;
                }
            });
            console.log(gefilterdeZwemmers);
            resolve(gefilterdeZwemmers);
        });
    };

    updateZwemmersTabel = function (zwemmers) {
        var $tableBody = $('table > tbody');
        $tableBody.html('');


        zwemmers.forEach(function (zwemmer) {
            $tableBody.append(
                '<tr>' +
                '<td>' +
                zwemmer.date +
                '</td>' +

                '<td>' +
                zwemmer.athlete +
                '</td>' +
                '<td>' +
                zwemmer.country +
                '</td>' +
                '<td>' +
                zwemmer.gold +
                '</td>' +
                '<td>' +
                zwemmer.silver +
                '</td>' +
                '<td>' +
                zwemmer.bronze +
                '</td>' +
                '</tr>');
        })
    };

    initModule = function () {

        var eventHandler = function () {
            var medaille = $(this).attr('id').split('_')[1];
            zoek(medaille);
        };

        $('#btn_goud').on('click', eventHandler);
        $('#btn_silver').on('click', eventHandler);
        $('#btn_brons').on('click', eventHandler);
    };

    return {
        zoek: zoek,
        initModule: initModule
    };

})(jQuery);
zwemModule.initModule();

var zoekModule = (function () {

    var initModule, zoek, filterZwemmers, updateZwemmersTabel;

    voegRijenToe = function (records) {
        return new Promise(function (resolve, reject) {
            var table = $('tbody');
            table.html('');
            records.forEach(function (r) {
                table.append('<tr>' +
                    '<td>' + r.artistName + '</td>' +
                    '<td>' + r.trackName + '</td>' +
                    '<td><img src="' + r.artworkUrl100 + '"></td>' +
                    '</tr>')
            });
            resolve();
        });

    };

    zoek = function () {
        return new Promise(function (resolve, reject) {
            var zoekterm = document.getElementById('search').value;
            var url = 'https://itunes.apple.com/search?term=' + zoekterm + '&entity=musicVideo';

            return $.getJSON(url)
                .then(function (data) {
                    console.log(data);
                    resolve(data.results);
                });
        });
    };

    initModule = function () {
        $('form').submit(function (e) {
            e.preventDefault();
            zoek()
                .then(function (results) {
                    voegRijenToe(results);
                })
                .then(function () {
                    console.log('records toegevoegd')
                });
        });
    };

    return {
        initModule: initModule,
        zoek: zoek
    }
}());

zoekModule.initModule();

