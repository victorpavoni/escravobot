module.exports = async client => {
  setInterval(() => {
    console.log(`Logged in as ${client.user.tag}.`)
    client.user.setPresence({
      status: "online",
      game: {
          name: "Usando *help",
          type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
      }
    })
  }, 60 * 1000)
}