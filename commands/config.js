const { MessageAttachment, MessageEmbed } = require('discord.js');

const execute = (bot, msg, args) => {
  const attachment = new MessageAttachment('https://i.imgur.com/8C3s3rP.gif')

  const embed = new Discord.MessageEmbed()
  .setTitle(`*Configuracao do server*`)
  .setDescription(`Siga o tutorial abaixo para configurar o bot corretamente.`)
  .setColor("#f2f2f2")
  .setImage(attachment)
  .setFooter('**Para mais comandos digite** ```*help```')

  msg.channel.send(embed)
}

module.exports = {
  name: "config",
  help: "Te ajuda a configurar o bot no seu server ```*config```",
  execute
}