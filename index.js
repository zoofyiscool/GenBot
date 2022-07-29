import { Client } from "revolt.js";
import * as dotenv from 'dotenv';
dotenv.config();

let client = new Client();

client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
);

client.on("message", async (message) => {
    if (message.content === "ping") {
        message.channel.sendMessage("pong");
    }
});

client.loginBot(process.env.TOKEN);

