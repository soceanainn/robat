### Róbat

Fáilte! Is bota Discord é Róbat atá deartha chun feidhmiúlacht a sholáthrú do freastalaithe Discord Gaelacha.

Róbat is a Discord bot designed to provide functionality for Irish language Discord Servers.

## Orduithe / Commands

???

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
