const execute = (bot, msg, args) => {
  const dado = Math.floor(Math.random() * 55) + 1

  setTimeout(() => {
    const ms = msg.reply("Jogando...")
  }, 2000);

  switch (dado) {
    case 30 < dado:
      ms.edit(`Catapimbas! Você tirou ${dado}`)
      break;
    case 10 < dado:
      ms.edit(`Parabéns! Você tirou ${dado}`)
      break;
      case 10 > dado:
      ms.edit(`KKKKKKKK SE FODEU! Você tirou ${dado}`)
      break;
  }

}

module.exports = {
  name: "dado",
  help: "Ao jogar o dado você pode tirar um numero entre 0 e 55 ```*dado```",
  execute
}