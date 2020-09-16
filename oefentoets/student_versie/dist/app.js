/**
 * Opdracht 4a, 4b, 4c, 4e
 */
//const SPA = function()...

/**
 * Opdracht 3a, 3c, 3e, 3f
 */
//const ChatLib = function ...

const ChatLib = function(domIds) {
    if (domIds === undefined)
    {
        console.log("Je moet domIds en verstuurBerichtCallback meegeven!");
    }
    else
    {
        var toonKnop = document.getElementById(domIds.toonKnop.value);
        var sluitKnop = document.getElementById(domIds.sluitKnop.value);
        var verzendKnop = document.getElementById(domIds.verzendKnop.value);

        $(toonKnop).on("click", function ()
        {
            ChatLib.prototype.toonChatbox(domIds.chatBox.value, domIds.toonKnop.value);
        });

        $(sluitKnop).on("click", function ()
        {
            ChatLib.prototype.sluitChatbox(domIds.chatBox.value, domIds.toonKnop.value);
        });

        $(verzendKnop).on("click", function ()
        {
            //ChatLib.prototype.verzendBericht(domIds.chatBericht.value, verstuurBerichtCallback());
        });
    }
};

ChatLib.prototype.toonChatbox = function (chatboxId, toonKnopId)
{
    var chatBox = document.getElementById(chatboxId);
    var toonKnop = document.getElementById(toonKnopId);

    chatBox.style.display = "block";
    toonKnop.style.display = "none";
};

ChatLib.prototype.sluitChatbox = function (chatboxId, toonKnopId)
{
    var chatBox = document.getElementById(chatboxId);
    var toonKnop = document.getElementById(toonKnopId);

    chatBox.style.display = "none";
    toonKnop.style.display = "block";
};

ChatLib.prototype.verzendBericht = function (chatBerichtId, verstuurBerichtCallback)
{
    var chatBericht = document.getElementById(chatBerichtId).innerHTML;
    var chatBerichtHtml = chatBericht.innerHTML;
    chatBericht.replace("", chatBericht);
    //chatBericht.remove();
    return verstuurBerichtCallback(chatBerichtHtml);
};
