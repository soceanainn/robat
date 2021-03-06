### Róbat

[![Add to Discord](https://raw.githubusercontent.com/soceanainn/github-badges/main/badges/discord-bot.svg)](https://discord.com/api/oauth2/authorize?client_id=824660083790315520&permissions=0&scope=bot)

Fáilte! Is bota Discord é Róbat atá deartha chun feidhmiúlacht a sholáthrú do freastalaithe Discord Gaelacha. Cur Róbat le do freastalaí Discord [anseo](https://discord.com/api/oauth2/authorize?client_id=824660083790315520&permissions=0&scope=bot).

Róbat is a Discord bot designed to provide functionality for Irish language Discord Servers. Add Róbat to your Discord server [here](https://discord.com/api/oauth2/authorize?client_id=824660083790315520&permissions=0&scope=bot).

## Orduithe / Commands

| Ordú / Command    | Sonraí | Details |
|-------------------|---|---|
| !teasáras _abc_   | Aimsigh téarmaí gaolmhara do _'abc'_ | Find terms similar to _'abc'_ |
| !mínigh _abc_     | Tabhair míniú ar _'abc'_ trí Ghaeilge | Explain _'abc'_ using Irish words |
| !scamall          | Cruthaigh scamall focla ón 100 teachtaireacht is déanaí sa chainéal | Create a wordcloud from the latest 100 messages in the channel |

## Contributing
Contributions are welcome from anyone, feel free to open a PR. Please use English for all of your application code,
and keep Irish language translations separate in order to facilitate error checking.

### Testing
For testing, you should create your own Discord Server, as well as an application in the [Developer Portal](https://discord.com/developers/applications).

When you create your application, go to 'Bot' and uncheck 'Public Bot'. Copy the bot token. You then need to create a `.env` file containing:
```
BOT_TOKEN={PASTED_TOKEN}
```

Next, go to 'OAuth2', check Scopes -> 'Bot'. Open the generated URL in a new tab and add the bot to the server you want to use for testing.

You can now run the bot locally with `npm start` (or `nodemon app.js` if you use Nodemon) and interact with it in your own server for testing.

### Deployments

Róbat is deployed using Heroku. Changes will be deployed automatically whenever changes are merged to the `main` branch.
