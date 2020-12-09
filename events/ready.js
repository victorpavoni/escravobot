module.exports = async client => {
  setInterval(() => {
    console.log(`Logged in as ${client.user.tag}.`)
    client.user.setActivity(`Trabalhando duro | *help | by: elitex#0001`, {type: 'STREAMING'})
  }, 60 * 1000)
}