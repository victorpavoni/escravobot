require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', msg => {
  if(msg.content === 'fodase') {
    msg.channel.send("fodase bem, fodase mal, cai de boca no meu pau.")
  }

  if(msg.content === '!emprego') {
    msg.member.roles.add('725852798939562057')
  }

  if(msg.content === 'sim sua gostosa') {
    msg.channel.send("https://media.discordapp.net/attachments/756209115209924749/784632154037682186/47f4cb3c46f2b553ee862399b17b6555.png")
  }

  if(msg.content === '!pedrinho') {
    msg.channel.send("https://images-ext-1.discordapp.net/external/lFHqSzgHAvU85eJU4oRaK3sQgAtcwwxH3-3gv_MNUhQ/https/media.discordapp.net/attachments/708169933623656538/780435819462000650/unknown.png?width=184&height=300")
  }

  if(msg.content === '!cracatoa') {
    msg.channel.send("https://images-ext-1.discordapp.net/external/jaWe-meThsEePKoaRIXKAucZuymxYv87jR27eQgKErA/%3Fsize%3D128/https/cdn.discordapp.com/avatars/525151435927846922/97a39d570a0d57bff5a85fe5d0b76e41.png")
  }

  if(msg.content === 'https://images-ext-1.discordapp.net/external/jaWe-meThsEePKoaRIXKAucZuymxYv87jR27eQgKErA/%3Fsize%3D128/https/cdn.discordapp.com/avatars/525151435927846922/97a39d570a0d57bff5a85fe5d0b76e41.png') {
    msg.react('😍')
  }
})

client.login(process.env.BOT_TOKEN)