const Discord = require('discord.js');
const Canvas = require('canvas').Canvas;
const sharp = require('sharp');
const d3 = require('d3');
const cloud = require('d3-cloud');
const JSDOM = require("jsdom").JSDOM;

const w = 960, h = 600; // Image Size

const prefix = '!scamall';
module.exports.prefix = prefix;
module.exports.handle = handle;

async function handle(message) {
    let text = "";
    let messages = await message.channel.messages.fetch({limit: 100})
        .catch(function(){ message.reply("ní féidir sean teachtaireachtaí sa chainéal seo a léamh"); });

    messages.map((v) => {
       if (!v.author.bot && v.type === 'DEFAULT' ) text += v.cleanContent + '\n';
    });
    parseText(text, message.channel);
}

async function sendCloud(channel, svg){
    // const svgString = '<svg xmlns="http://www.w3.org/2000/svg" ' +
    //     'width="'+ w +
    //     '" height="' + h +
    //     '" version="1.1">' +
    //     svg.html() +
    //     '</svg>';

    const svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" version="1.1"><g transform="translate(480,300)scale(1)"><text text-anchor="middle" transform="translate(151,82)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #66c2a5;">1</text><text text-anchor="middle" transform="translate(24,28)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #fc8d62;">3</text><text text-anchor="middle" transform="translate(-69,22)rotate(-60)" style="font-size: 55px; font-family: Impact; fill: #8da0cb;">20</text><text text-anchor="middle" transform="translate(-25,19)rotate(-90)" style="font-size: 55px; font-family: Impact; fill: #e78ac3;">30</text><text text-anchor="middle" transform="translate(128,-49)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #a6d854;">83</text><text text-anchor="middle" transform="translate(224,-14)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #ffd92f;">88</text><text text-anchor="middle" transform="translate(-184,-86)rotate(-90)" style="font-size: 55px; font-family: Impact; fill: #e5c494;">90</text><text text-anchor="middle" transform="translate(155,-167)rotate(-90)" style="font-size: 55px; font-family: Impact; fill: #b3b3b3;">100</text><text text-anchor="middle" transform="translate(-74,120)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #66c2a5;">scamall</text><text text-anchor="middle" transform="translate(157,133)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #fc8d62;">theres</text><text text-anchor="middle" transform="translate(-118,-15)rotate(-30)" style="font-size: 55px; font-family: Impact; fill: #8da0cb;">fucking</text><text text-anchor="middle" transform="translate(213,-114)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #e78ac3;">bug</text><text text-anchor="middle" transform="translate(331,8)rotate(60)" style="font-size: 55px; font-family: Impact; fill: #a6d854;">library</text><text text-anchor="middle" transform="translate(52,52)rotate(-60)" style="font-size: 55px; font-family: Impact; fill: #ffd92f;">used</text><text text-anchor="middle" transform="translate(288,-154)rotate(60)" style="font-size: 55px; font-family: Impact; fill: #e5c494;">convert</text><text text-anchor="middle" transform="translate(204,46)rotate(60)" style="font-size: 55px; font-family: Impact; fill: #b3b3b3;">svg</text><text text-anchor="middle" transform="translate(166,175)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #66c2a5;">png</text><text text-anchor="middle" transform="translate(260,203)rotate(-30)" style="font-size: 55px; font-family: Impact; fill: #fc8d62;">cos</text><text text-anchor="middle" transform="translate(-292,83)rotate(-60)" style="font-size: 55px; font-family: Impact; fill: #8da0cb;">discord</text><text text-anchor="middle" transform="translate(306,125)rotate(60)" style="font-size: 55px; font-family: Impact; fill: #e78ac3;">doesnt</text><text text-anchor="middle" transform="translate(-331,-60)rotate(-90)" style="font-size: 55px; font-family: Impact; fill: #a6d854;">support</text><text text-anchor="middle" transform="translate(-139,-144)rotate(-90)" style="font-size: 55px; font-family: Impact; fill: #ffd92f;">thing</text><text text-anchor="middle" transform="translate(-281,-253)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #e5c494;">happened</text><text text-anchor="middle" transform="translate(-129,138)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #b3b3b3;">made</text><text text-anchor="middle" transform="translate(79,-32)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #66c2a5;">like</text><text text-anchor="middle" transform="translate(-202,152)rotate(-90)" style="font-size: 55px; font-family: Impact; fill: #fc8d62;">just</text><text text-anchor="middle" transform="translate(-2,232)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #8da0cb;">actually</text><text text-anchor="middle" transform="translate(39,-105)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #e78ac3;">ill</text><text text-anchor="middle" transform="translate(-45,-138)rotate(-30)" style="font-size: 55px; font-family: Impact; fill: #a6d854;">fast</text><text text-anchor="middle" transform="translate(-293,-144)rotate(60)" style="font-size: 55px; font-family: Impact; fill: #ffd92f;">rest</text><text text-anchor="middle" transform="translate(324,-179)rotate(60)" style="font-size: 55px; font-family: Impact; fill: #e5c494;">take</text><text text-anchor="middle" transform="translate(51,-160)rotate(60)" style="font-size: 55px; font-family: Impact; fill: #b3b3b3;">get</text><text text-anchor="middle" transform="translate(366,-204)rotate(60)" style="font-size: 55px; font-family: Impact; fill: #66c2a5;">boss</text><text text-anchor="middle" transform="translate(-67,-213)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #fc8d62;">prs</text><text text-anchor="middle" transform="translate(6,-26)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #8da0cb;">ye</text><text text-anchor="middle" transform="translate(109,53)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #e78ac3;">hi</text><text text-anchor="middle" transform="translate(-297,180)rotate(60)" style="font-size: 55px; font-family: Impact; fill: #a6d854;">pr</text><text text-anchor="middle" transform="translate(-395,-21)rotate(-90)" style="font-size: 55px; font-family: Impact; fill: #ffd92f;">contractor</text><text text-anchor="middle" transform="translate(202,-180)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #e5c494;">lad</text><text text-anchor="middle" transform="translate(33,-237)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #b3b3b3;">big</text><text text-anchor="middle" transform="translate(-143,182)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #66c2a5;">yet</text><text text-anchor="middle" transform="translate(167,-242)rotate(30)" style="font-size: 55px; font-family: Impact; fill: #fc8d62;">dev</text><text text-anchor="middle" transform="translate(302,245)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #8da0cb;">day</text><text text-anchor="middle" transform="translate(-190,-157)rotate(-60)" style="font-size: 55px; font-family: Impact; fill: #e78ac3;">ya</text><text text-anchor="middle" transform="translate(80,81)rotate(-30)" style="font-size: 55px; font-family: Impact; fill: #a6d854;">x</text><text text-anchor="middle" transform="translate(-377,246)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #ffd92f;">one</text><text text-anchor="middle" transform="translate(-274,-77)rotate(-90)" style="font-size: 55px; font-family: Impact; fill: #e5c494;">🤔</text><text text-anchor="middle" transform="translate(-117,-157)rotate(0)" style="font-size: 55px; font-family: Impact; fill: #b3b3b3;">p</text><text text-anchor="middle" transform="translate(-145,77)rotate(-90)" style="font-size: 55px; font-family: Impact; fill: #66c2a5;"></text></g></svg>'
    svgString.match(/.{1,1999}/g).forEach(value => {
        channel.send(value);
    });

    sharp(new Buffer.from(svgString))
        .png()
        .toBuffer()
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, 'wordcloud.png');
            channel.send('Wordcloud:', attachment);
        });
}

function parseText(text, channel) {
    let tags = {};
    let e = {};
    text.split(wordSeparators).forEach(function(t) {
        discard.test(t) || (t = t.replace(punctuation, ""),
        stopWords.test(t.toLowerCase()) || (t = t.substr(0, maxLength),
            e[t.toLowerCase()] = t,
            tags[t.toLowerCase()] = (tags[t.toLowerCase()] || 0) + 1))
    });
    tags = Object.entries(tags).sort(function(t, e) {
        return e.value - t.value
    });
    tags.forEach(function(t) {
        t.text = t[0];
        t.key = e[t[0]];
        t.value = t[1];
    });
    generate(tags, channel);
}

function generate(tags, channel) {
    let layout = cloud()
        .canvas(function() { return new Canvas(1, 1); })
        .timeInterval(10)
        .size([w, h])
        .fontSize(function(t) { return fontSize(+t.value)})
        .text(function(t) { return t.text})
        .on("end", function(t,e){ layout.stop(); draw(t,e, channel)});

    layout.font('Impact').spiral('archimedean');
    let fontSize = d3.scaleLog().range([10, 100]);

    tags.length && fontSize.domain([+tags[tags.length - 1].value || 1, +tags[0].value]);
    layout.stop().words(tags.slice(0, max = Math.min(tags.length, 250))).start();
}

function draw(words, e, channel) {
    const document = new JSDOM("<!DOCTYPE html><body></body>").window.document;
    const fill = d3.scaleOrdinal(d3.schemeSet2);

    let svg = d3.select(document.body).append("svg").attr("width", w).attr("height", h);
    let vis = svg.append("g").attr("transform", "translate(" + [w >> 1, h >> 1] + ")");

    let scale = e ? Math.min(w / Math.abs(e[1].x - w / 2), w / Math.abs(e[0].x - w / 2), h / Math.abs(e[1].y - h / 2), h / Math.abs(e[0].y - h / 2)) / 2 : 1;
    vis.selectAll("text")
        .data(words, function(t){ return t.text.toLowerCase(); })
        .attr("transform", function(t){ return "translate(" + [t.x, t.y] + ")rotate(" + t.rotate + ")"; })
        .style("font-size", function(t){ return t.size + "px"; })
        .enter().append("text")
        .attr("text-anchor", "middle")
        .attr("transform", function(t){ return "translate(" + [t.x, t.y] + ")rotate(" + t.rotate + ")"; })
        .style("font-size", function(t){ return t.size + "px"; })
        .style("font-family", function(t){ return t.font; })
        .style("fill", function(t){ return fill(t.text.toLowerCase()); })
        .text(function(t){ return t.text; });

    vis.attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
    sendCloud(channel, svg);
}

// Text parsing
const maxLength = 30;
const unicodePunctuationRe = "!-#%-*,-/:;?@\\[-\\]_{}\xa1\xa7\xab\xb6\xb7\xbb\xbf\u037e\u0387\u055a-\u055f\u0589\u058a\u05be\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0af0\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f14\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u1400\u166d\u166e\u169b\u169c\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cc0-\u1cc7\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d\u207e\u208d\u208e\u2329\u232a\u2768-\u2775\u27c5\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc\u29fd\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00-\u2e2e\u2e30-\u2e3b\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uaaf0\uaaf1\uabeb\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a\uff1b\uff1f\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65";
const stopWords = /^(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall)$/;
const punctuation = new RegExp("[" + unicodePunctuationRe + "]","g");
const wordSeparators = /[ \f\n\r\t\v\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\u3031-\u3035\u309b\u309c\u30a0\u30fc\uff70]+/g;
const discard = /^(@|https?:|\/\/)/;
