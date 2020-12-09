const execute = async (bot, msg, args) => {
  const ms = await msg.channel.send("Ping?")
  const clientms = ms.createdTimestamp - msg.createdTimestamp
  ms.edit(`🐒 Seu ping é de ${clientms}ms`)
}

module.exports = {
  name: "ping",
  help: "Mostra o ping do usuario ```*ping```",
  execute
}