const Discord = require('discord.js');
require('dotenv').config();
const Teasaras = require('./commands/teasaras');
const Focloir = require('./commands/focloir');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot is ready');
});

client.login(process.env.BOT_TOKEN);

client.on('message', (msg) => {
  try {
    message = msg.content.trim();
    if (!message.startsWith('!') || msg.author.bot) return;

    if (message === 'Róbat test')
      return msg.reply('Hi'); // Test command

    if (message.startsWith(Teasaras.prefix))
      return Teasaras.handle(msg);

    if (message.startsWith(Focloir.prefix))
      return Focloir.handle(msg);

  } catch (error){
    console.error('Unhandled exception: "' + error + '" for message: "' + msg.content + '"');
  }
});
