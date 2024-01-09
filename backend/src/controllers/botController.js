const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.BOT_TOKEN);

const getUserInfo = async (req, res) => {
  try {
    const user = await bot.getChatMember();
    res.status(200).json(user);
  } catch (error) {}
};

module.exports = { getUserInfo };
