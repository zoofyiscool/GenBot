const { Client } = require("revolt.js");
require('dotenv').config();
let client = new Client();
const prefix = "doas ";

client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
);

client.on("message", async (message) => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (! message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    if (command === "ping") {
        message.channel.sendMessage("pong");
    }
});

client.loginBot(process.env.TOKEN);

