module.exports = async client => {
  console.log('Bot iniciado com ' + client.users.size + ' usuários, em ' + client.channels.size + ' canais de ' + client.guilds.size + ' servidores.');


  setInterval(function() {
    client.user.setActivity(`Chutando o saco do pedrinho | !help `, {type: 'WATCHING'});
  }, 60 * 1000);

}