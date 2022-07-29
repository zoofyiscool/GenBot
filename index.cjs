const { Client } = require("revolt.js");
require('dotenv').config();
let client = new Client();
const prefix = "doas ";
let jokes = ["simulation of monkey pressing button,\nsimulation complete",
`"We're looking for a drug dealer," said the police officer, "and you fit the description we've been given."\nI said, 'Well, what do you need?'"`
, `When I was crossing the border into Canada, they asked if I had any firearms with me.\nI said, 'Well, what do you need?'`, 
`"Do you have anything to declare?", the Border Control officer asked.\nI said, "War!"`];

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
    else if (command === "joke") {
        message.channel.sendMessage(jokes[getRandomInt(4)]);
    }
    else if (command === "deez") {
        message.channel.sendMessage(":troll_smile:");
    }
});

client.loginBot(process.env.TOKEN);

