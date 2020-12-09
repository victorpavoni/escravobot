require('dotenv').config()

const fs = require('fs')
const path = require('path')

const Discord = require('discord.js')
const client = new Discord.Client()
client.commands = new Discord.Collection()
client.queues = new Map()

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

const commandFiles = fs
  .readdirSync(path.join(__dirname + '/commands'))
  .filter(filename => filename.endsWith('.js'))

for (var filename of commandFiles) {
  const command = require(`./commands/${filename}`)
  client.commands.set(command.name, command)
}

client.on('message', msg => {
  if(!msg.content.startsWith(process.env.BOT_PREFIX)) return

  const args = msg.content.slice(process.env.BOT_PREFIX.length).split(' ')
  const command = args.shift()

  try {
    client.commands.get(command).execute(client, msg, args)
  } catch (err) {}
})

client.login(process.env.BOT_TOKEN) 