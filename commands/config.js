const { MessageAttachment } = require('discord.js');

const execute = (bot, msg, args) => {
  const attachment = new MessageAttachment('https://i.imgur.com/8C3s3rP.gif')
  msg.channel.send(attachment)
  msg.channel.send("**Para mais comandos digite** ```*help```")
}

module.exports = {
  name: "config",
  help: "Te ajuda a configurar o bot no seu server ```*config```",
  execute
}