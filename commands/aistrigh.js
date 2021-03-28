const translate = require('@vitalets/google-translate-api');

const prefix = '!aistrigh';
module.exports.prefix = prefix;
module.exports.handle = handle;

function handle(message){
    let term = message.content.trim().substring(prefix.length).trim();
    translate(term, {to: 'ga'}).then(res => {
        if (res.from.text.autoCorrected || ! res.from.text.didYouMean)
            return message.reply(res.text);
        translate(res.from.text.value, {to: 'ga'}).then(updatedRes => {
            message.reply(updatedRes.text);
        });
    }).catch(error => {
        console.error("ERROR - aistrigh.js: " + error);
        message.reply('bhí fadhb nascadh le translate.google.com. Bain triail as arís níos déanaí');
    });
}