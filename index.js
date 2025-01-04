const TelegramBot = require("node-telegram-bot-api")
const token = process.env.BOT_TOKEN; // Import TOKEN from .env file

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
	const chatID = msg.chat.id;
	const messageText = msg.text;

	console.log("🪳 ~ file: index.js:9 ~ messageText-", messageText);

	if (messageText === "/start") {
		bot.sendMessage(chatId, "Welcome to the bot!");
	}
});
