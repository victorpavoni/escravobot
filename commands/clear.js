const { MessageEmbed } = require('discord.js')

const execute = async (bot, msg, args) => {

  // Verification
  if (!args[0]) return message.channel.send(`Por favor, escreva um numero entre 1 e 100`)

  if (!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.reply("⚠️ Comando apenas para admins!");

  let qtd = parseInt(args[0]) + 1

  // function

  if (parseInt(args[0]) > 100 ) {
    qtd = 100;
  } else {
    qtd = parseInt(args[0]);
  }

  await msg.channel.bulkDelete(qtd, true);

  const embed = new MessageEmbed()
    .setTitle(`${msg.author.username}`)
    .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`😎 Sucesso ao deletar ${qtd} mensagens`)
    .setFooter(msg.author.username, msg.author.displayAvatarURL({ dynamic: true }))
    .setColor('#f2f2f2')
  await msg.channel.send(embed)

}

module.exports = {
  name: "clear",
  help: "Este comando irá excluir o tanto de mensagem que você desejar.",
  usage: "*clear [qtd]",
  execute
}