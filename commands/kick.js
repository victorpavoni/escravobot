const execute = (bot, msg, args) => {
  let user =  msg.mentions.users.first()
  if(!msg.guild.me.hasPermission("KICK_MEMBERS"))
    return msg.reply("🤨 Ae pivete, tu não tem cargo pra expulsar esse membro!")
  
  if(!user) msg.reply("Nenhum usuario encontrado.")

  const member = msg.guild.member(user)

  member
  .kick(args[2])
  .then(() => msg.reply(`✔️ Usuario @${user.tag} foi expulso com sucesso.`))
  .catch(err => "⚠️ Não foi possivel expulsar este membro.")

  // colocar hierarquia

}

module.exports = {
  name: "kick",
  help: "Expulsa um usuario ```*kick @usuario [motivo]```",
  execute
}