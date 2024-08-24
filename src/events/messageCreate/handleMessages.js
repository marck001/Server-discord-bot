const { Client, Message } = require('discord.js');

/**
 *
 * @param {Client} client
 * @param {Message} message
 */

module.exports = (client, message) => {

    if (!message.inGuild() || message.author.bot) return;
    let = messageText = " ";
    switch (message.content) {

        case "Hi":
        case "Hello":
            messageText = "https://tenor.com/view/cat-chat-cat-fall-hello-chat-cat-gif-24961178";
            break; 
        case "<:Gort:1215026947269333104>":
            messageText = "https://tenor.com/view/linux-delete-funni-funny-capybara-gif-13530809397687099660";
            break;

        case "@everyone":
            messageText = "https://tenor.com/view/everyone-ping-everyone-discord-discord-moment-gif-19916334";
            break;

        default:
            messageText = " ";



    }
    if (messageText !== " ") {
        message.reply(messageText);

    }






};