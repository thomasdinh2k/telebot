const TelegramBot = require("node-telegram-bot-api")
const token = "8183245292:AAGiFz0n_b8PA7vjvPnEJKhAqmVHwMlWDlQ"; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
	const chatID = msg.chat.id;
	const messageText = msg.text;

	console.log("🪳 ~ file: index.js:9 ~ messageText-", messageText);

	if (messageText === "/start") {
		bot.sendMessage(chatId, "Welcome to the bot!");
	}
});
