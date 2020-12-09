module.exports = async client => {
  console.log(`Logged in as ${client.user.tag}.`)
  setInterval(() => {
    client.user.setActivity(`Trabalhando duro | *help | by elitex#0001`, {type: 'PLAYING'})
  }, 60 * 1000)
}