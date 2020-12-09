const execute = async (bot, msg, args) => {
  if (!msg.guild.me.hasPermission("MANAGE_MESSAGES")) 
    return msg.reply("⚠️ Comando apenas para admins!");

  let qtd = parseInt(args[0]) + 1
  if(qtd > 70)  msg.reply("⚠️ Você não pode excluir mais de 70 mensagens!")

    let apagadas = qtd - 1
  
    let clear = async () => {
        try {
        msg.delete()
        const fetched = await msg.channel.fetchMessages({limit: qtd})
        msg.channel.bulkDelete(fetched)
        msg.reply(`✔️ ${apagadas} Mensagens apagadas.`)
        } catch(e) {
            return msg.reply("🤔 Algo de errado não está certo!")
        }
    }
    clear();
  
}

module.exports = {
  name: "clear",
  help: "Este comando irá excluir o tanto de mensagem que você desejar. ```*clear [qtd]```",
  execute
}