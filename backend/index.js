const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const TelegramBot = require("node-telegram-bot-api");

const botRoutes = require("./src/routes/bot.js");

require("dotenv").config({ path: ".env" });

const app = express();
app.use(express.json());
// app.use(rateLimiter);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect.`));

const token = "6771631978:AAH0sGO2XaMb6ss8bGjpqXGbAuBLP2QcYuk";
const bot = new TelegramBot(token);

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  var user_profile = bot.getUserProfilePhotos(msg.from.id);
  console.log(user_profile);

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
});

app.use(`/api/bot`, botRoutes);
