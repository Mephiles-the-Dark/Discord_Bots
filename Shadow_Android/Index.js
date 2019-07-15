const Discord = require("discord.js")
// require
// login
const client = new Discord.Client()
const config = require('./config.json')
client.commands = new Discord.Collection()
// commands
client.commands.set('eval', require('./commands/eval.js'))
client.commands.set('help', require('./commands/help.js'))
client.commands.set('ping', require('./commands/ping.js'))
client.commands.set('purge', require('./commands/purge.js'))
client.commands.set('say', require('./commands/say.js'))
client.commands.set('screenshare', require('./commands/screenshare.js'));
client.commands.set('setavatar', require('./commands/setavatar.js'))
client.commands.set('setnickname', require('./commands/setnickname.js'))
client.commands.set('setpresence', require('./commands/setpresence.js'))
client.commands.set('setstatus', require('./commands/setstatus.js'))
client.commands.set('setusername', require('./commands/setusername.js'))
// events
client.on('message', msg => require('./events/message.js')(client, msg))
client.on('ready', () => require('./events/ready.js')(client))
client.on('disconnect', () => console.log(`Disconnected at ${new Date()}`))
client.on('reconnecting', () => console.log(`Reconnecting at ${new Date()}`))
client.on('debug', (e) => console.error(e.replace(config.token, 'that was redacted')))
client.on('error', (e) => console.error(e.replace(config.token, 'that was redacted')))
client.on('warn', (e) => console.error(e.replace(config.token, 'that was redacted')))
// functions

client.login(config.token)
