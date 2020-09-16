/**
 * Opdracht 3a, 3c, 3e, 3f
 */
const ChatLib = function (domIds, verstuurBerichtCallback) {
    this.domIds = domIds;
    this.verstuurBerichtCallback = verstuurBerichtCallback;
};

ChatLib.prototype.toonChatbox = function (chatBoxId, toonKnopId) {
    $(`#${chatBoxId}`).show();
    $(`#${toonKnopId}`).hide();
};

ChatLib.prototype.sluitChatbox = function (chatBoxId, toonKnopId) {
    $(`#${chatBoxId}`).hide();
    $(`#${toonKnopId}`).show();
};

ChatLib.prototype.verzendBericht = function (chatBerichtId, verstuurBerichtCallback) {
    const domElement = $(`#${chatBerichtId}`);

    const bericht = domElement.text();
    domElement.text('');

    return verstuurBerichtCallback(bericht);
};
