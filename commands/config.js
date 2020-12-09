const { MessageAttachment } = require('discord.js');

const execute = (bot, msg, args) => {
  const attachment = new MessageAttachment('../img/config.gif')
  msg.channel.send(attachment)
}

module.exports = {
  name: "config",
  help: "Te ajuda a configurar o bot no seu server ```*config```",
  execute
}