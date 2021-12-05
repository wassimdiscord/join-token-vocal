const Discord = require("discord.js");
const fs = require("fs-extra");
const config = require("./config.json")
const tokens = fs
  .readFileSync("./tokens.txt", "utf-8")
  .replace(/\r/gi, "")
  .split("\n");


tokens.forEach((token, i) => {

const client = new Discord.Client()
client.login(token).then(() => {

client.channels.get(config.salon).join()
})})
