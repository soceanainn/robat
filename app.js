require('dotenv').config();

const Discord = require('discord.js');
const Teasaras = require('./commands/teasaras');
const Minigh = require('./commands/minigh');
const Scamall = require('./commands/scamall');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Róbat is ready');
});

client.login(process.env.BOT_TOKEN);

client.on('message', (msg) => {
  try {
    const message = msg.content.trim();
    if (!message.startsWith('!') || msg.author.bot) return;

    if (message.startsWith(Teasaras.prefix))
      return Teasaras.handle(msg);

    if (message.startsWith(Minigh.prefix))
      return Minigh.handle(msg);

    if(message.startsWith(Scamall.prefix))
      return Scamall.handle(msg);

  } catch (error){
    console.error('Unhandled exception: "' + error + '" for message: "' + msg.content + '"');
  }
});
