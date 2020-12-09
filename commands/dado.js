const execute = async (bot, msg, args) => {
  const dado = Math.floor(Math.random() * 55) + 1

  setTimeout(() => {
    const ms = await msg.channel.send("Jogando...")
  }, 2000);
  
    if(30 < dado)
      ms.edit(`Catapimbas! Você tirou ${dado}`)
    else if(10 < dado)
      ms.edit(`Parabéns! Você tirou ${dado}`)
    else
      ms.edit(`KKKKKKKK SE FODEU! Você tirou ${dado}`)
  }

module.exports = {
  name: "dado",
  help: "Ao jogar o dado você pode tirar um numero entre 0 e 55 ```*dado```",
  execute
}