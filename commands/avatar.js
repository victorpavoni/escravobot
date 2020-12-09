const execute = (bot, msg, args) => {
  msg.channel.send(msg.member.author.displayAvatarURL())
}

module.exports = {
  name: "avatar",
  help: "Mostra a foto do autor da mensagem",
  execute
}