const { Client } = require("revolt.js");
require('dotenv').config();
let client = new Client();
const prefix = "doas ";

client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

client.on("message", async (message) => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (! message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    if (command === "ping") {
        message.channel.sendMessage("Pong! :ping_pong:");
    }
    else if (command === "meme") {
        fetch(`https://meme-api.herokuapp.com/gimme`)
        .then(res => res.json())
        .then(async json => {
            message.channel.sendMessage(`${json.title}`);
            message.channel.sendMessage(`${json.url}`);
        })
    }
    else if (command === "deez") {
        message.channel.sendMessage(":troll_smile:");
    }
});

client.loginBot(process.env.TOKEN);

