const TelegramBot = require("node-telegram-bot-api");
const token = "6771631978:AAH0sGO2XaMb6ss8bGjpqXGbAuBLP2QcYuk";
const bot = new TelegramBot(token, { polling: true });

let lastMessagePromise = null;

function setLastMessagePromise() {
  if (!lastMessagePromise) {
    lastMessagePromise = new Promise((resolve) => {
      bot.on("message", (msg) => {
        lastMessage = msg;
        const chatId = msg.chat.id;
        const messageText = msg.text;

        if (messageText === "/start") {
          const gameUrl = "t.me/tg_games_new_bot/tgapp";
          const keyboard = {
            inline_keyboard: [
              [
                {
                  text: "Play Game",
                  url: gameUrl,
                  web_app: {
                    resize_keboard: true,
                  },
                },
              ],
            ],
          };

          const options = {
            parse_mode: "Markdown",
            reply_markup: JSON.stringify(keyboard),
          };

          const message =
            "Hello! Welcome to the game. Click the button below to start playing:";
          bot.sendMessage(chatId, message, options);
        }
        resolve();
      });
    });
  }
}

const getUserInfo = async (req, res) => {
  setLastMessagePromise();
  await lastMessagePromise;
  const userId = lastMessage && lastMessage.from.id;
  await lastMessagePromise;

  if (userId) {
    const userName = lastMessage && lastMessage.from.username;
    const language = lastMessage && lastMessage.from.language_code;
    let avatarUrl = null;
    bot
      .getUserProfilePhotos(userId, { limit: 1 })
      .then((photos) => {
        if (photos.total_count > 0) {
          const fileId = photos.photos[0][0].file_id;

          avatarUrl = `https://api.telegram.org/file/bot${token}/${fileId}`;
        }
        res.status(200).json({
          userName,
          language,
          avatarUrl,
        });
      })
      .catch((error) => {
        console.error("Error fetching user profile photos:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  }
};

module.exports = {
  getUserInfo,
};
