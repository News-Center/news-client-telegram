import fp from "fastify-plugin";
import { FastifyPluginAsync } from "fastify";
import TelegramBot from "node-telegram-bot-api";

import "dotenv/config";
import { Config } from "../config";

declare module "fastify" {
    interface FastifyInstance {
        telegram: TelegramBot;
    }
}

const telegramPlugin: FastifyPluginAsync = fp(async server => {
    const bot = new TelegramBot(Config.token, { polling: true });

    bot.on("message", (msg: TelegramBot.Message) => {
        if (msg.text !== "/start") return;

        const { from } = msg;
        const userId = from?.id;

        if (userId === undefined) return;

        bot.sendMessage(userId, "Please enter the following id in the frontend: " + userId);
    });

    server.decorate("telegram", bot);
});
export default telegramPlugin;
