const execute = async (bot, msg, args) => {
  let respostas = [
    'Sim.',
    'Pergunte mais tarde.',
    'Melhor você não saber.',
    'Não.'
  ]
  if(!args[0]) return msg.reply("Você precisa me perguntar algo.")

  let resposta = Math.floor(Math.random() * respostas.length)
  const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
  ms = await msg.channel.send('Pergunta difícil, vamos ver...')
  await delay(3000)
  ms.edit(respostas[resposta])
}

module.exports = {
  name: "8ball",
  help: "Responde sua pergunta com sim ou não.",
  usage: "*8ball [msg]",
  execute
}