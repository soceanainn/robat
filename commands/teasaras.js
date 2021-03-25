const Discord = require('discord.js');
const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;
const db = new JsonDB(new Config("sources/teasaras/db", false, true, '/'));

const prefix = '!teasáras';
module.exports.prefix = prefix;
module.exports.handle = handle;

function handle(message) {
    const searchTerm = message.content.trim().substring(prefix.length).trim();
    try {
        const senseSets = db.getData("/" + searchTerm);
        const embed = new Discord.MessageEmbed()
            .setTitle(searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1))
            .setURL('http://www.potafocal.com/thes/?s=' + encodeURI(searchTerm));

        for (meaning in senseSets) {
            embed.addField('Brí #' + (+meaning+1), senseSets[meaning].join(", "), true)
        }

        message.channel.send(embed);
    } catch(error) {
        message.reply('níor aimsíodh aon téarmaí gaolmhara do "' + searchTerm + '"');
    }
}
