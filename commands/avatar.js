const Discord = require("discord.js");

const execute = (bot, msg, args) => {
  let user;
  
  if (msg.mentions.users.first()) {
    user = msg.mentions.users.first();
  } else if (args[0]) {
    user = msg.guild.members.cache.get(args[0]).user;
  } else {
    user = msg.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag} avatar`)
  .setDescription(`[URL do AVATAR de **${user.tag}**](${avatar})`)
  .setColor("#f2f2f2")
  .setImage(avatar)
  
  return msg.channel.send(embed);
}

module.exports = {
  name: "avatar",
  help: "Mostra a foto do autor da mensagem.",
  usage: "*avatar @user",
  execute
}