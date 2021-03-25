const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot is ready');
});

client.login(process.env.BOT_TOKEN);

client.on('message', (msg) => { // Test command
  if (msg.content === 'Róbat test') msg.reply('Hi');
});
