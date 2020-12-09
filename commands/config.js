const Discord = require('discord.js');

const execute = (bot, msg, args) => {
  const embed = new Discord.MessageEmbed()
  .setTitle(`*Configuracao do server*`)
  .setDescription(`Siga o tutorial abaixo para configurar o bot corretamente.`)
  .setColor("#f2f2f2")
  .setImage('https://i.imgur.com/8C3s3rP.gif')
  .setFooter('🛩 Para mais comandos digite: *help')

  msg.channel.send(embed)
}

module.exports = {
  name: "config",
  help: "Te ajuda a configurar o bot no seu server.",
  usage: "*config",
  execute
}