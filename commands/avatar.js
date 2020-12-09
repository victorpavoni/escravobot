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
  // 4096 is the new biggest size of the avatar.
  // Enabling the dynamic, when the user avatar was animated/GIF, it will result as a GIF format.
  // If it's not animated, it will result as a normal image format.
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag} avatar`)
  .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
  .setColor(0x1d1d1d)
  .setImage(avatar)
  
  return msg.channel.send(embed);
}

module.exports = {
  name: "avatar",
  help: "Mostra a foto do autor da mensagem",
  execute
}