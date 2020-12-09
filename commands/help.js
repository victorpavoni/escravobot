const execute = (bot, msg, args) => {
  let string = "```diff \n - AJUDA - \n ```"
  bot.commands.forEach(command => {
    if(command.help) {
      string += `**-** **${command.name}:** ${command.help}\n**Comando:** ${command.usage}\n\n`
    }
  });

  return msg.channel.send(string)
}

module.exports = {
  name: "help",
  execute
}