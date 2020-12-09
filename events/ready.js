module.exports = async client => {
  console.log(`Bot iniciado em ${client.guilds.size} servidores.`);
  client.user.setGame(`Chutando o saco do pedrinho | !help`);

}