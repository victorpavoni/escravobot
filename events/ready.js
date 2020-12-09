module.exports = async client => {
  setInterval(() => {
    console.log(`Bot iniciado.`)
    client.user.setActivity(`Chutando o saco do pedrinho | !help`, {type: 'WATCHING'})
  }, 60 * 1000)
}