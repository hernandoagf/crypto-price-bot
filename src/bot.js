const { Client } = require('discord.js')
require('dotenv').config()

const client = new Client()

client.on('ready', () => console.log(`${client.user.tag} has logged in!`))

client.setInterval(async () => {
  const server = await client.guilds.fetch(process.env.DISCORD_SERVER_ID)
  const bot = await server.members.fetch(client.user.id)
  bot.setNickname(String(Math.round(Math.random() * 10000)))
}, process.env.UPDATE_FREQUENCY * 1000)

client.login(process.env.DISCORDJS_BOT_TOKEN)