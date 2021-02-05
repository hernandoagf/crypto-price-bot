const { Client } = require('discord.js')
const hnyPrice = require('./handlers/price')
require('dotenv').config()

const client = new Client()

const priceUpdate = async () => {
  const server = await client.guilds.fetch(process.env.DISCORD_SERVER_ID)
  const bot = await server.members.fetch(client.user.id)
  const price = await hnyPrice()
  bot.setNickname(`HNY: $${price}`)
}

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in!`)
  priceUpdate()
})

client.setInterval(() => priceUpdate(), process.env.UPDATE_FREQUENCY * 1000)

client.login(process.env.DISCORDJS_BOT_TOKEN)