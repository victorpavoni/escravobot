const execute = (bot, msg, args) => {
  msg.channel.send("https://images-ext-1.discordapp.net/external/lFHqSzgHAvU85eJU4oRaK3sQgAtcwwxH3-3gv_MNUhQ/https/media.discordapp.net/attachments/708169933623656538/780435819462000650/unknown.png")

  if(msg.content == 'https://images-ext-1.discordapp.net/external/lFHqSzgHAvU85eJU4oRaK3sQgAtcwwxH3-3gv_MNUhQ/https/media.discordapp.net/attachments/708169933623656538/780435819462000650/unknown.png')
    msg.react('💩')
}

module.exports = {
  name: "pedrinho",
  help: "Mostra a foto do pedrinho",
  execute
}