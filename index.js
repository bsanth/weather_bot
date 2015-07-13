var TelegramBot = require('node-telegram-bot-api');

var token = '';
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
   console.log(msg);
   var chatId = msg.chat.id;
   bot.sendMessage(chatId, "Hello " + msg.text);
});