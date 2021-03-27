const Discord = require('discord.js');
require('dotenv').config();
const Teasaras = require('./commands/teasaras');
const Scamall = require('./commands/scamall');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot is ready');
});

client.login(process.env.BOT_TOKEN);

client.on('message', (msg) => {
  message = msg.content.trim();
  if (!message.startsWith('!') || msg.author.bot) return;

  if (message === 'Róbat test')
    return msg.reply('Hi'); // Test command

  if (message.startsWith(Teasaras.prefix))
    return Teasaras.handle(msg);

  if(message.startsWith(Scamall.prefix))
    return Scamall.handle(msg);
});
