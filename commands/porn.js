const execute = (bot, msg, args) => {
  const porns = []
  const porn = Math.floor(Math.random() * porns.length)

  if(msg.content.split(' ')[1] == undefined)
    msg.channel.send(porns[porn])
  else {
    porns.push(`${msg.content.split(' ')[1]}`)
  }

}

module.exports = {
  name: "porn",
  help: "Mostra um porno aleatoriamente e adiciona com o comando ```*porn [linkdoporn]```",
  execute
}