require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const Aistrigh = require('./commands/aistrigh');
const Minigh = require('./commands/minigh');
const Scamall = require('./commands/scamall');
const Teasaras = require('./commands/teasaras');

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

    if(message.startsWith(Aistrigh.prefix))
      return Aistrigh.handle(msg);

  } catch (error){
    console.error('Unhandled exception: "' + error + '" for message: "' + msg.content + '"');
  }
});
