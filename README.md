# Crypto Price Bot

A Discord bot that updates its nickname with the latest price of a
cryptocurrency

## Developer quick start 👩‍💻

`npm run dev` will launch the bot locally, with hot reloading included.

There are a few other scripts provided:

- `start`: Starts up the bot without hot reloading; used for deployment.
- `lint`: Lints the project with ESLint.

### Configuration

First, install the dependencies: `npm install` `npm install -D`

For the bot to run, you need to create a `.env` file with the following
variables found in the `.env.sample` file:

- `DISCORDJS_BOT_TOKEN`: Your Discord API token.
  [See this guide on how to obtain one](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token).
- `DISCORD_SERVER_ID`: The ID of your Discord Server (You can find it by
  right-clicking on your server's name on Discord).
- `UPDATE_FREQUENCY`: How frequent you want the bot to update the price (in
  seconds).

### Displaying on top

If you want your bot to display on top of all other users, create a role like
`Price bot` with limited permissions and put it on top of all other roles.
**Note:** make sure to give it the `Change nickname` permission, so it can
update its nickname.
