const { Client } = require('discord.js')
require('dotenv').config()

const client = new Client()

client.on('ready', () => console.log(`${client.user.tag} has logged in!`))

// const pages = {
//   1: { title: ':one:', description: 'This is page one!' },
//   2: { title: ':two:', description: 'This is page two!' },
//   3: { title: ':three:', description: 'This is page three!' },
//   4: { title: ':four:', description: 'This is page four!' }
// }

// const handleReactions = async (msg, m, options, filter) => {
//   const { min, max, limit } = options
//   let { page } = options

//   m.awaitReactions(filter, { max: 1, time: limit, errors: ['time']})
//     .then(async collected => {
//       const reaction = collected.first()

//       if (reaction.emoji.name === '⬆️') {
//         // check if the page can go back one
//         if (page !== min) page = page - 1
//         const newMessage = await m.channel.send({ embed: pages[page] })

//         await newMessage.react('⬆️')
//         await newMessage.react('⬇️')

//         // Restart the listener
//         handleReactions(msg, newMessage, { ...options, page }, filter)
//       }
//       else if (reaction.emoji.name === '⬇️') {        
//         // check if the page can go forward one
//         if (page !== max) page = page + 1
//         const newMessage = await m.channel.send({ embed: pages[page] })
        
//         await newMessage.react('⬆️')
//         await newMessage.react('⬇️')
      
//         // restart the listener 
//         handleReactions(msg, newMessage, { ...options, page }, filter)
//       }
//       else handleReactions(msg, m, options, filter)
//     }).catch(() => {})
// }

// client.on('message', async msg => {
//   if (msg.author.bot) return

//   const options = {
//     limit: 15 * 1000,
//     min: 1,
//     max: Object.keys(pages).length,
//     page: 1
//   }

//   const m = await msg.channel.send({ embed: pages[options.page] })

//   await m.react('⬆️')
//   await m.react('⬇️')

//   const filter = (reaction, user) => {
//     return ['⬆️', '⬇️'].includes(reaction.emoji.name) && user.id === msg.author.id
//   }

//   handleReactions(msg, m, options, filter)
// })

client.setInterval(async () => {
  const server = await client.guilds.fetch(process.env.DISCORD_SERVER_ID)
  const bot = await server.members.fetch(client.user.id)
  bot.setNickname(String(Math.round(Math.random() * 10000)))
}, 5000)

client.login(process.env.DISCORDJS_BOT_TOKEN)