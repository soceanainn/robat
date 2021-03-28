const Discord = require('discord.js');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const https = require('https');

const prefix = '!mínigh';
module.exports.prefix = prefix;
module.exports.handle = handle;

function handle(message){
    let searchTerm = message.content.trim().substring(prefix.length).trim();
    try {
        https.get('https://www.teanglann.ie/ga/fb/' + encodeURI(searchTerm),(res) => {
            let data = "";

            res.on('data', (d) => {
                data += d
            });

            res.on('end', () => {
                let parsed = new JSDOM(data.toString());
                let entry = parsed.window.document.querySelector(".fb.entry");
                if (!entry)
                    return message.reply('níor aimsíodh "' + searchTerm + '" sa foclóir');

                const embed = new Discord.MessageEmbed()
                    .setTitle(searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1))
                    .setURL('https://www.teanglann.ie/ga/fb/' + encodeURI(searchTerm));

                embed.setDescription(entry.querySelector(".fb.pos").childNodes[0].title);
                embed.addField('Brí:', entry.querySelector(".fb.definition.clickable").textContent);

                message.channel.send(embed);
            });

        });
    } catch(error) {
        console.error("ERROR - minigh.js: " + error);
        message.reply('bhí fadhb nascadh le teanglann.ie. Bain triail as arís níos déanaí');
    }
}