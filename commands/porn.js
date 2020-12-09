const execute = (bot, msg, args) => {
  var porns = [
    'https://cdn.boob.bot/boobs/80007AE8.gif'
  ]
  const porn = Math.floor(Math.random() * porns.length)
  if(msg.content.split(' ')[1] == undefined)
    msg.channel.send(porns[porn])
  else {
    porns.push(`${msg.content.split(' ')[1]}`)
  }
  console.log(`Array = ${porns} 
  Index = ${porn}`);

}

module.exports = {
  name: "porn",
  help: "Mostra um porno aleatoriamente e adiciona com o comando ```*porn [linkdoporn]``` **Em manutenção**",
  execute
}