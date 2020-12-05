const execute = (bot, msg, args) => {
  msg.channel.send("https://images-ext-1.discordapp.net/external/jaWe-meThsEePKoaRIXKAucZuymxYv87jR27eQgKErA/%3Fsize%3D128/https/cdn.discordapp.com/avatars/525151435927846922/97a39d570a0d57bff5a85fe5d0b76e41.png")

  if(msg.content == 'https://images-ext-1.discordapp.net/external/jaWe-meThsEePKoaRIXKAucZuymxYv87jR27eQgKErA/%3Fsize%3D128/https/cdn.discordapp.com/avatars/525151435927846922/97a39d570a0d57bff5a85fe5d0b76e41.png')
    msg.react('😍')
}

module.exports = {
  name: "cracatoa",
  help: "Mostra a foto da cracatoa",
  execute
}