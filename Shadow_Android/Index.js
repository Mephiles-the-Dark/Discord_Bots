const Discord = require("discord.js")
// require
// login
const bot = new Discord.Client()
const config = require('./config.json')
bot.commands = new Discord.Collection()
// commands
bot.commands.set('eval', require('./commands/eval.js'))
bot.commands.set('help', require('./commands/help.js'))
bot.commands.set('ping', require('./commands/ping.js'))
// events
bot.on('message', msg => require('./events/message.js')(bot, msg))
bot.on('ready', () => require('./events/ready.js')(bot))
// functions

bot.login(config.token)
