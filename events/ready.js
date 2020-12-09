module.exports = async client => {
  console.log(`Logged in as ${client.user.tag}.`)
  setInterval(() => {
    client.user.setActivity(`✈ To voando alto | *config | by elitex#0001`, {type: 'PLAYING'})
  }, 60 * 1000)
}